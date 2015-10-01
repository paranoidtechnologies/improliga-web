import fetch from '../fetch';
import moment from 'moment';

export default (req, res, next) => {
  var id = parseInt(req.params.showId);

  if (isNaN(id)) {
    res
      .status(404)
      .json({'message':'not-found'});
    return;
  }

  let date = null;
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

  console.log(cfg);

  return fetch(cfg, function(err, data) {
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
