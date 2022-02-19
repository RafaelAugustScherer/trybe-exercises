const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: err.details[0].message });
  }

  const { code, message } = err;
  if (!message || !code) {
    console.error(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
  
  return res.status(code).json({ error: message });
}