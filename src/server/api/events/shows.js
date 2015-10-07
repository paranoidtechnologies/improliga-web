import fetch from '../fetch';
import moment from 'moment';
import {getFilters} from './shows/filters';

export default (req, res, next) => {
  let date = null;
  let cfg = {
    join: ['location'],
    model: 'Impro.Event',
    page: req.query.page,
    perPage: req.query.perPage,
    sort: [
      {
        attr: 'start',
        mode: 'desc'
      }
    ]
  };

  if (req.query.month) {
    date = moment(req.query.month, 'YYYY-MM');
  }

  try {
    cfg.filters = getFilters(date);
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

  return fetch(cfg, function(err, data) {
    if (err) {
      let msg = err.message;

      if (!msg) {
        msg = 'invalid-api-response';
      }

      return res
        .status(500)
        .json({
          message:msg
        });
    }

    res.json(data);
  });
};
