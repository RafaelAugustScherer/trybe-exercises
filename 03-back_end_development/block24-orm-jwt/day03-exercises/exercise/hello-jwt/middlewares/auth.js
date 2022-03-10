const jwt = require('jsonwebtoken');
const { SERVER_SECRET } = process.env;

const generateToken = (req, _res, next) => {
  const { username, admin } = req.user;

  try {
    const token = jwt.sign(
      { data: { username, admin } },
      SERVER_SECRET,
      { expiresIn: '1h', algorithm: 'HS256' }
    );
    req.token = token;
  } catch (e) {
    return res.status(401).json({ message: e.message });
  }

  next();
}

const authenticate = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    const error = { statusCode: 401, message: 'Token not found' };
    return next(error);
  }

  try {
    const user = jwt.verify(token, SERVER_SECRET);
    req.user = user.data;
  } catch(e) {
    return res.status(401).json({ message: e.message });
  }

  next();
}

module.exports = {
  generateToken,
  authenticate,
}