import {browse} from '../api/comm';
import {Record} from 'immutable';

export function preloadEventDetail(req, res, next) {
  browse({
    host: req.serverConfig.api.host,
    filters: [
      {
        attr: 'id',
        type: 'exact',
        exact: parseInt(req.params.eventId, 10)
      }
    ],
    join: ['location'],
    model: 'Impro.Event',
    perPage: 1,
    next: function(err, body) {
      if (err) {
        return res
          .status(500)
          .json(err);
      }

      if (body.total > 0) {
        res.eventDetail = body.data[0];
        next();
      } else {
        res
          .status(404)
          .json({'message':'not-found'});
      }
    }
  });
};
