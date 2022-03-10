const userSchema = require('../schemas/user');

const validateUser = (req, _res, next) => {
  const { username, password } = req.body;
  const user = { username, password };

  const { error, admin } = userSchema.login(user);

  if (error) return next(error);

  req.user = { ...user, admin };
  next();
};

module.exports = {
  validateUser,
}