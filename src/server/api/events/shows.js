import browseEvents from './browse';

export default (req, res, next) => {
  let cfg = {
    filters: [
      {
        attr: 'type',
        type: 'exact',
        exact: [1, 2, 3, 4, 6]
      }
    ]
  };

  browseEvents(req, res, cfg, (err, data) => {
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
