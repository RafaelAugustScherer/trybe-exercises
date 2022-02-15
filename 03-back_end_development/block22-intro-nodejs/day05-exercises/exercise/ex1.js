const Express = require('express');

const router = Express.Router();

const validateUsername = (username) => username.length > 3;

const validateEmail = (email) => {
  const emailRegex = new RegExp(/[a-z0-9]+[@]a*[a-z0-9]+[.][a-z0-9]{1,3}/);
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const MIN_LENGTH = 4;
  const MAX_LENGTH = 8;

  return !!(password.length >= MIN_LENGTH
    && password.length <= MAX_LENGTH
    && Number.isInteger(+password))
};

const validateRegister = (req, res, next) => {
  const { username, email, password } = req.body;
  const err = { message: 'invalid data' };

  if (!username || !email || !password) return next(err);

  if (!validateEmail(email)
    || !validatePassword(password)
    || !validateUsername(username)) return next(err);

  return res.status(201).json({ message: "user created" });
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const err = { message: 'email or password is incorret' };

  if (!email || !password) return next(err);

  if (!validateEmail(email)
    || !validatePassword(password)) return next(err);

  const token = '86567349784e';

  return res.status(200).json({ token });
}

const treatError = (err, _req, res, _next) =>
  res.status(400).json({ message: err.message });

router
  .route('/register')
  .post(validateRegister, treatError);

router
  .route('/login')
  .post(validateLogin, treatError)

module.exports = router;