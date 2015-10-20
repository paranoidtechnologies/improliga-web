import request from 'superagent';

export const urls = {
  browse: '/api/model/{model}/browse',
  create: '/api/model/{model}/create',
  drop: '/api/model/{model}/{id}/drop',
  edit: '/api/model/{model}/{id}/edit',
};

export function browse(cfg) {
  cfg.method = 'get';
  cfg.url = urls.browse;

  return apiRequest(cfg);
};

export function create(cfg) {
  cfg.method = 'post';
  cfg.url = urls.create;

  return apiRequest(cfg);
};

export function drop(cfg) {
  cfg.method = 'post';
  cfg.url = urls.drop;

  return apiRequest(cfg);
};

export function edit(cfg) {
  cfg.method = 'put';
  cfg.url = urls.edit;

  return apiRequest(cfg);
};

export function apiRequest(cfg) {
  const rq = request[cfg.method];
  cfg = purify(cfg);

  return rq(cfg.url)
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

export function purify(cfg = {}) {

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

  if (typeof cfg.url !== 'string') {
    throw new Error('Url must be a string');
  }

  cfg.url = 'http://' + cfg.host + cfg.url.replace('{model}', cfg.model);
  cfg.query = {
    'filters': JSON.stringify(cfg.filters),
    'join': JSON.stringify(cfg.join),
    'page': cfg.page,
    'per_page': cfg.perPage,
    'sort': JSON.stringify(cfg.sort),
  };

  return cfg;
};
