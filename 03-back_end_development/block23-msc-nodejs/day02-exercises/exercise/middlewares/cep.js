const Joi = require('joi');
const CepSchema = require('../schemas/cep');

const validateCep = (req, _res, next) => {
  const { cep } = req.params;
  const { method } = req;

  const validation = CepSchema.validateCep(cep, method);
  if (validation.message) next(validation);

  next();
}

const validateData = (req, _res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const data = { cep, logradouro, bairro, localidade, uf };

  const { error } = Joi.object({
    cep: Joi.required(),
    logradouro: Joi.required(),
    bairro: Joi.required(),
    localidade: Joi.required(),
    uf: Joi.required(),
  }).validate(data);

  if (error) next(error);

  req.data = data;
  next();
}

module.exports = {
  validateCep,
  validateData,
}