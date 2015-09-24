import request from 'superagent';
import bluebird from 'bluebird';

const config = require('../config');
const host = config.api.host;
const url = '/api/model/{model}/browse';

export default (config, next) => {
  const dest = 'http://' + host + url.replace('{model}', config.model);

  if (!config.perPage) {
    config.perPage = 20;
  }

  console.log('fetch', dest);

  return request
    .get(dest)
    .query({
      filters: JSON.stringify(config.filters),
      per_page: config.perPage
    })
    .end(function(err, res) {
      if (err) {
        next(err, null);
        return;
      }

      next(err, res.body);
    });
};
