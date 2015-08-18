import request from 'superagent';
import constants from './constants';
import Dispatcher from './dispatcher';

export default class Api {
  static timeout = 10000;
  static pending = {};

  abortRequest(key) {
    if (pending[key]) {
      pending[key].callback = function(){};
      pending[key].abort();
      pending[key] = null;
    }
  }


  dispatch(key, response, params) {
    var payload = {actionType: key, response: response};

    if (params) {
      payload.queryParams = params;
    }

    Dispatcher.dispatch(payload);
  }


  fetch(url, key, params, callback) {
    if (typeof params === 'undefined' || !params) {
      params = {};
    }

    if (typeof callback === 'undefined') {
      callback = makeDigestFun(key, params);
    }

    this.abortRequests(key);
    this.dispatch(key, constants.request.PENDING, params);
    pending[key] = get(url).end(callback);
  }


  get(url) {
    return request
      .get(url)
      .set('Accept', 'application/json')
      .timeout(this.TIMEOUT)
      .query();
  }
};
