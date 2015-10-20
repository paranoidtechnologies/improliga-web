import request from 'superagent';

const config = require('../config');
const host = config.api.host;
const url = '/api/model/{model}/browse';


export function get(cfg) {
  cfg.method = 'get';
  return apiRequest(cfg);
};


export function post(cfg) {
  cfg.method = 'post';
  return apiRequest(cfg);
};

export function apiRequest(cfg) {
  cfg = purify(cfg);

  return request
    .get(cfg.url)
    .query(cfg.query)
    .send(cfg.data)
    .type('form')
    .end(function(err, res) {

      if (err) {
        cfg.next(err, null);
        return;
      }

      cfg.next(err, res.body);
    });
};

export function purify(cfg) {

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

  if (!(cfg.join instanceof Array)) {
    cfg.join = [];
  }

  cfg.url = 'http://' + host + url.replace('{model}', cfg.model);
  cfg.query = {
    'filters': JSON.stringify(cfg.filters),
    'join': JSON.stringify(cfg.join),
    'sort': JSON.stringify(cfg.sort),
    'per_page': cfg.perPage
  };

  return cfg;
};
