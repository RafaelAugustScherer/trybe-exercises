const express = require('express');

const cepRouter = express.Router();

const { getDataByCep, postCep } = require('./cep');
const { validateCep, validateData } = require('../middlewares/cep');
const errorMiddleware = require('../middlewares/error');

cepRouter.get('/:cep', validateCep, getDataByCep);
cepRouter.post('/', validateData, postCep)
cepRouter.use(errorMiddleware);

module.exports = {
  cepRouter,
}