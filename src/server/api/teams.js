import {get} from './comm';

export function fetchTeamList(req, res, next) {
  return get({
    host: req.serverConfig.api.host,
    model: 'Impro.Team',
    page: req.query.page,
    perPage: req.query.perPage,
    filters: [
      {
        attr: 'visibility',
        type: 'exact',
        exact: 4
      }
    ],
    next: (err, data) => {
      if (err) {
        return res
          .status(500)
          .json(err);
      }

      res.json(data);
    }
  });
};

export function fetchTeamDetail(req, res, next) {
  const cfg = {
    host: req.serverConfig.api.host,
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
        exact: parseInt(req.params.teamId, 10)
      }
    ],
    next: (err, data) => {
      if (err) {
        return res
          .status(500)
          .json(err);
      }

      res.json(data);
    }
  };

  return get(cfg);
};
