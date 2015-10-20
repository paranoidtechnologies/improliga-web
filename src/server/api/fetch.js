import request from 'superagent';

const config = require('../config');
const host = config.api.host;
const url = '/api/model/{model}/browse';

export default (cfg, next) => {

  if (typeof cfg.page === 'undefined') {
    cfg.page = 0;
  } else {
    cfg.page = parseInt(cfg.page, 10);
  }

  if (typeof cfg.perPage === 'undefined') {
    cfg.perPage = 20;
  } else {
    cfg.perPage = parseInt(cfg.perPage, 10);
  }

  if (!cfg.join) {
    cfg.join = [];
  }

  const dest = 'http://' + host + url.replace('{model}', cfg.model);
  const query = {
    'filters': JSON.stringify(cfg.filters),
    'join': JSON.stringify(cfg.join),
    'sort': JSON.stringify(cfg.sort),
    'per_page': cfg.perPage
  };

  console.log('fetch', dest);

  return request
    .get(dest)
    .query(query)
    .end(function(err, res) {

      if (err) {
        next(err, null);
        return;
      }

      next(err, res.body);
    });
};
