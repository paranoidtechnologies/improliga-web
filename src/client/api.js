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
  }

  abortRequests(key) {
    if (this.pending[key]) {
      this.pending[key].callback = function() { };
      this.pending[key].abort();
      this.pending[key] = null;
    }
  }

  fetch(url, key, params, callback) {
    return this.send({
      callback: callback,
      key: key,
      method: 'get',
      params: params,
      url: url,
    });
  }

  delete(cfg) {
    cfg.method = 'delete';
    return this.send(cfg);
  }

  get(cfg) {
    cfg.method = 'get';
    return this.send(cfg);
  }

  post(cfg) {
    cfg.method = 'post';
    return this.send(cfg);
  }

  prefixUrl(url) {
    return this.prefix + '/' + this.version + url;
  }

  put(cfg) {
    cfg.method = 'put';
    return this.send(cfg);
  }

  request(cfg) {
    const rq = request[cfg.method];
    const self = this;

    if (!(rq instanceof Function)) {
      throw new Error('unknown-request-method: ' + cfg.method);
    }

    const inst = rq(cfg.url)
      .set('Accept', 'application/json')
      .timeout(this.TIMEOUT)
      .send(cfg.data)
      .query(cfg.params);

    this.abortRequests(cfg.key);
    this.pending[cfg.key] = inst;

    inst.end(function(err, res) {
      delete self.pending[cfg.key];

      if (res && res.body && res.body.data instanceof Array) {
        res.body.data.forEach((item) => {
          self.wakeUp(item);
        });
      }

      cfg.callback(err, res);
    });

    return inst;
  }

  send(cfg) {
    cfg.url = this.prefixUrl(cfg.url);
    cfg.data = cfg.data || {};
    cfg.params = cfg.params || {};

    return this.request(cfg);
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
};
