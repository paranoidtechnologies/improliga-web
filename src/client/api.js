import request from 'superagent';
import moment from 'moment';

export default class Api {
  timeout = 10000;
  pending = {};
  errorCallback = null;
  version = '1';
  prefix = '/api';

  error(err, res) {
    if (this.errorCallback instanceof Function) {
      this.errorCallback(err, res);
    }
  };

  abortRequests(key) {
    if (this.pending[key]) {
      this.pending[key].callback = function() { };
      this.pending[key].abort();
      this.pending[key] = null;
    }
  }

  fetch(url, key, params, callback) {
    const self = this;
    url = this.prefix + '/' + this.version + url;

    if (typeof params === 'undefined' || !params) {
      params = {};
    }

    this.abortRequests(key);
    this.pending[key] = this.get(url)
      .query(params)
      .end(function(err, res) {
        delete self.pending[key];

        if (res && res.body && res.body.data instanceof Array) {
          res.body.data.forEach((item) => {
            self.wakeUp(item);
          });
        }

        callback(err, res);
      });
  }

  wakeUp(item) {
    // Convert to camelCase
    for (var key in item) {
      if (~key.indexOf('_')) {
        let tmp = key.split('_');
        tmp = tmp.map((word, index) => {
          if (index > 0) {
            return word[0].toUpperCase() + word.substr(1);
          }

          return word;
        });

        tmp = tmp.join('');
        item[tmp] = item[key];
        delete item[key];
      }
    }

    if (item.createdAt) {
      item.createdAt = moment(item.createdAt);
    }

    if (item.updatedAt) {
      item.updatedAt = moment(item.updatedAt);
    }

    return item;
  }

  get(url, params) {
    return request
      .get(url)
      .set('Accept', 'application/json')
      .timeout(this.TIMEOUT)
      .query();
  }
};
