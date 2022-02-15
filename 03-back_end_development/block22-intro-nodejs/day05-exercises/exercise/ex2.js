const Express = require('express');
const Axios = require('axios');

const router = Express.Router();

const validateToken = (req, _res, next) => {
  const { authorization } = req.headers;
  const LENGTH = 12;
  const err = { message: 'invalid token' };

  if (typeof authorization !== 'string'
    || authorization.length !== LENGTH) return next(err);
  
  next();
}

const fetchData = async (_req, res) => {
  const { data } = await Axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  return res.status(200).json(data);
}

const treatError = (err, _req, res, _next) =>
  res.status(400).json({ message: err.message });

router
  .route('/price')
  .get(validateToken, fetchData, treatError);

module.exports = router;