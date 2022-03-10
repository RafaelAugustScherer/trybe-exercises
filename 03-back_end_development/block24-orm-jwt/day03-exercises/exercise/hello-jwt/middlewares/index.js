const error = require('./error');
const { generateToken, authenticate } = require('./auth');
const { validateUser } = require('./user');
const { verifyAdmin } = require('./admin');

module.exports = {
  validateUser,
  error,
  generateToken,
  authenticate,
  verifyAdmin,
};
