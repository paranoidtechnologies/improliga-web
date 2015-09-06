import request from 'superagent';

export default class Api {
  static timeout = 10000;
  static pending = {};

  static abortRequests(key) {
    if (this.pending[key]) {
      this.pending[key].callback = function() { };
      this.pending[key].abort();
      this.pending[key] = null;
    }
  }

  static fetch(url, key, params, callback) {
    const self = this;

    console.log('fetch', url);
    if (typeof params === 'undefined' || !params) {
      params = {};
    }

    if (typeof callback === 'undefined') {
      callback = makeDigestFun(key, params);
    }

    this.abortRequests(key);
    this.pending[key] = this.get(url).end(function(err, res) {
      delete self.pending[key];
      callback(err, res);
    });
  }

  static get(url) {
    return request
      .get(url)
      .set('Accept', 'application/json')
      .timeout(this.TIMEOUT)
      .query();
  }
};
