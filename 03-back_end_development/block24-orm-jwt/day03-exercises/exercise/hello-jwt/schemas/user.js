const Joi = require('joi');

const isAdmin = ({ username, password }) => {
  const { ADMIN_USER, ADMIN_PASSWORD } = process.env;

  return ADMIN_USER === username
      && ADMIN_PASSWORD === password
};

const login = (user) => {
  const schema = Joi.object({
    username: Joi.string()
      .regex(/^[a-zA-Z0-9]{5,}$/)
      .required()
      .messages({
        'string.pattern.base': 'username must be at least 5 characters long and cannot contain special characters'
      }),
    password: Joi.string()
      .regex(/^.{5,}$/)
      .required()
      .messages({
        'string.pattern.base': 'password must be at least 5 characters long'
      }),
  });

  const validation = schema.validate(user);
  return { ...validation, admin: isAdmin(user) };
}

module.exports = {
  login,
  isAdmin,
}