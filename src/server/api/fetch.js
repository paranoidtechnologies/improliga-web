import request from 'superagent';

const config = require('../config');
const host = config.api.host;
const url = '/api/model/{model}/browse';

export default (config, next) => {

  if (!config.page) {
    config.page = 0;
  }

  if (!config.perPage) {
    config.perPage = 20;
  }

  if (!config.join) {
    config.join = [];
  }

  const dest = 'http://' + host + url.replace('{model}', config.model);
  const query = {
    'filters': JSON.stringify(config.filters),
    'join': JSON.stringify(config.join),
    'sort': JSON.stringify(config.sort),
    'per_page': config.perPage
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
