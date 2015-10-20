import {get} from '../comm';

export default (req, res, next) => {
  var id = parseInt(req.params.eventId, 10);

  if (isNaN(id)) {
    res
      .status(404)
      .json({'message':'not-found'});
    return;
  }

  return get({
    host: req.serverConfig.api.host,
    filters: [
      {
        attr: 'id',
        type: 'exact',
        exact: id
      }
    ],
    join: ['location'],
    model: 'Impro.Event',
    perPage: 1,
    next: function(err, data) {
      if (err) {
        return res
          .status(500)
          .json(err);
      }

      if (data.total > 0) {
        res.json(data);
      } else {
        res
          .status(404)
          .json({'message':'not-found'});
      }
    }
  });
};
