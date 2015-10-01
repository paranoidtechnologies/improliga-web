import request from 'superagent';

export default class Api {
  timeout = 10000;
  pending = {};
  errorCallback = null;
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

    if (typeof params === 'undefined' || !params) {
      params = {};
    }

    this.abortRequests(key);
    this.pending[key] = this.get(url)
      .query(params)
      .end(function(err, res) {
        delete self.pending[key];
        callback(err, res);
      });
  }

  get(url, params) {
    return request
      .get(url)
      .set('Accept', 'application/json')
      .timeout(this.TIMEOUT)
      .query();
  }
};
