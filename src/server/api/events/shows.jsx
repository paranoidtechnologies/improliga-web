import fetch from '../fetch';
import moment from 'moment';
import {getFilters} from './shows/filters';

export default (req, res, next) => {
  let date = null;
  let cfg = {
    model: 'Impro.Event',
    perPage: req.query.perPage
  };

  if (req.query.month) {
    date = moment(req.query.month, 'YYYY-MM');
  }

  try {
    cfg.filters = getFilters(date);
  } catch (e) {
    return res.status(400).json({
      'message': e.message,
      'value': req.query.month
    });
  }

  return fetch(cfg, function(err, data) {
    if (err) {
      return res
        .status(500)
        .json(err);
    }

    res.json(data);
  });
};
