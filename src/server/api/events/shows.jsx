import fetch from '../fetch';

export default (req, res, next) => {
  const cfg = {
    model: 'Impro.Event',
    filters: [
      {
        attr: 'visibility',
        type: 'exact',
        exact: 4
      }
    ]
  };

  fetch(cfg, function(err, data) {
    if (err) {
      return res
        .status(500)
        .json(err);
    }
    
    res.json(data);
  });
};
