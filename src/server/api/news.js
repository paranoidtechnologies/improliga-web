import fetch from './fetch';

export function fetchNews(req, res, next) {
  const cfg = {
    model: 'Impro.News',
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

export function fetchNewsItemDetail(req, res, next) {
  const cfg = {
    model: 'Impro.News',
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
        exact: req.params.newsItemId
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
