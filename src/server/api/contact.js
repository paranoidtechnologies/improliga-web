//~ import {get} from './comm';

export function saveFeedback(req, res, next) {
  const cfg = {
    model: 'Impro.Feedback',
  };

  console.log(req.body);


  res.send('ok, accepted', cfg);
};
