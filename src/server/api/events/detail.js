import fetch from '../fetch';

export default (req, res, next) => {
  var id = parseInt(req.params.eventId, 10);

  if (isNaN(id)) {
    res
      .status(404)
      .json({'message':'not-found'});
    return;
  }

  let cfg = {
    filters: [
      {
        attr: 'id',
        type: 'exact',
        exact: id
      }
    ],
    model: 'Impro.Event',
    perPage: 1,
  };

  return fetch(cfg, function(err, data) {
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
  });
};
