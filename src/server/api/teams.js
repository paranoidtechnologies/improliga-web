import fetch from './fetch';

export function fetchTeamList(req, res, next) {
  const cfg = {
    model: 'Impro.Team',
    page: req.query.page,
    perPage: req.query.perPage,
    filters: [
      {
        attr: 'visibility',
        type: 'exact',
        exact: 4
      }
    ]
  };

  return fetch(cfg, function(err, data) {
    if (err) {
      return res
        .status(500)
        .json(err);
    }

    res.json(data);
  });
};

export function fetchTeamDetail(req, res, next) {
  const cfg = {
    model: 'Impro.Team',
    page: 0,
    perPage: 1,
    filters: [
      {
        attr: 'visibility',
        type: 'exact',
        exact: 4
      },
      {
        attr: 'id',
        type: 'exact',
        exact: parseInt(req.params.teamId)
      }
    ]
  };

  return fetch(cfg, function(err, data) {
    if (err) {
      return res
        .status(500)
        .json(err);
    }

    res.json(data);
  });
};
