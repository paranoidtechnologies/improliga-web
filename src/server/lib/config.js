const config = require('../config');

export default function serverConfig(req, res, next) {
  req.serverConfig = config;
  next();
}
