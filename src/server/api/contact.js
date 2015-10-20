import {create} from './comm';

export function saveFeedback(req, res) {
  return create({
    data: req.body,
    host: req.serverConfig.api.host,
    model: 'Impro.Feedback',
    next: (err, data) => {

      console.log(err);
      console.log(data);

      if (err) {
        return res
          .status(500)
          .json(err);
      }

      res.json(data);
    }
  });
};
