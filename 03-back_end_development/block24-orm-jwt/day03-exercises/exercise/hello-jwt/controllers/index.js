const ping = require('./ping');
const { login, echo, topSecret } = require('./user');

module.exports = {
  login,
  echo,
  ping,
  topSecret,
};
