export function healthCheck(req, res, next) {
  res.status(200).send({"status":"up"});
}
