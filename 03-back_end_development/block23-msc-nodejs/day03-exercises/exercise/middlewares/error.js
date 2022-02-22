const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  console.error(err);

  if (!err.code || !err.message) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
  }
  return res.status(err.code).json({ message: err.message });
}