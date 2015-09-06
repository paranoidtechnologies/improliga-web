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
    res.json(data);
  });
};
