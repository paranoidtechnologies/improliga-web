import useragent from 'useragent';

export function userAgent(req, res, next) {
  req.ua = useragent.is(req.headers['user-agent']);
  next();
};
