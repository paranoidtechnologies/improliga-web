import fetch from './fetch';

export function fetchBlog(req, res, next) {
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

export function fetchBlogArticleDetail(req, res, next) {
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
        exact: parseInt(req.params.newsItemId, 10)
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
