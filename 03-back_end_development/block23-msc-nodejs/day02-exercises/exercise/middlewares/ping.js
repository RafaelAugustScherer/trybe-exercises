const { StatusCodes } = require('http-status-codes');

module.exports = (_req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong!' });
}