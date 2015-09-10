import request from 'superagent';
import bluebird from 'bluebird';

const config = require('../config');
const host = config.api.host;
const url = '/api/model/{model}/browse';

export default (config, next) => {
  const dest = 'http://' + host + url.replace('{model}', config.model);
  console.log('fetch', dest);

  return request
    .get(dest)
    .query({
      filters: JSON.stringify(config.filters)
    })
    .end(function(err, res) {
      if (err) {
        next(err, null);
        return;
      }

      next(err, res.body);
    });
};
