const { StatusCodes } = require('http-status-codes');

const Cep = require('../views/cep');

const getDataByCep = async (req, res, next) => {
  const { cep } = req.params;

  const data = await Cep.getDataByCep(cep);
  if (data.message) return next(data);

  return res.status(StatusCodes.OK).json(data);
}

const postCep = async (req, res, next) => {
  const { data } = req;

  const response = await Cep.postCep(data);
  if (response.message) return next(response);

  return res.status(StatusCodes.CREATED).json(response);
}

module.exports = {
  getDataByCep,
  postCep,
}