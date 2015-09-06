import request from 'superagent';
import constants from './constants';
import Dispatcher from './dispatcher';

export default class Api {
  static timeout = 10000;
  static pending = {};

  static abortRequests(key) {
    if (this.pending[key]) {
      this.pending[key].callback = function(){};
      this.pending[key].abort();
      this.pending[key] = null;
    }
  }

  static dispatch(key, response, params) {
    var payload = {actionType: key, response: response};

    if (params) {
      payload.queryParams = params;
    }

    Dispatcher.dispatch(payload);
  }

  static fetch(url, key, params, callback) {
    if (typeof params === 'undefined' || !params) {
      params = {};
    }

    if (typeof callback === 'undefined') {
      callback = makeDigestFun(key, params);
    }

    this.abortRequests(key);
    //~ this.dispatch(key, constants.request.PENDING, params);
    this.pending[key] = this.get(url).end(callback);
  }

  static get(url) {
    return request
      .get(url)
      .set('Accept', 'application/json')
      .timeout(this.TIMEOUT)
      .query();
  }
};
