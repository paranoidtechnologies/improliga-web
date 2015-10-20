import {get} from '../comm';
import moment from 'moment';
import {getFilters} from './shows/filters';
import xtend from 'xtend';

export default function browse(req, res, cfg = {}, next) {
  let date = null;
  let filters;
  cfg = xtend(cfg, {
    host: req.serverConfig.api.host,
    join: ['location'],
    model: 'Impro.Event',
    next: next,
    page: req.query.page,
    perPage: req.query.perPage,
    sort: [
      {
        attr: 'start',
        mode: 'desc'
      }
    ]
  });

  if (req.query.month) {
    date = moment(req.query.month, 'YYYY-MM');
  }

  try {
    filters = getFilters(date);
  } catch (e) {

    if (e.message === 'invalid-date') {
      return res.status(400).json({
        'message': e.message,
        'value': req.query.month
      });
    }

    return res.status(500).json({
      'message': e.message
    });
  }

  if (typeof cfg.filters === 'undefined') {
    cfg.filters = filters;
  } else {
    cfg.filters = cfg.filters.concat(filters);
  }

  return get(cfg);
};
