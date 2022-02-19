const { StatusCodes } = require('http-status-codes');
const Cep = require('../models/cep');

const getDataByCep = async (cep) => {
  if (cep[5] === '-') {
    cep = cep.split('-').join('');
  }

  const data = await Cep.getDataByCep(cep);
  
  if(!data.length) 
    return {
      code: StatusCodes.NOT_FOUND,
      message: 'CEP não encontrado'
    };

  return data;
}

const postCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  cep = cep.split('-').join('');
  const data = [cep, logradouro, bairro, localidade, uf];

  const alreadyExists = await Cep.getDataByCep(cep);
  if (alreadyExists.length)
    return {
      code: StatusCodes.CONFLICT,
      message: 'CEP já existente',
    };

  const response = await Cep.postCep(data);
  if (response.message) return response;

  return data;
}

module.exports = {
  getDataByCep,
  postCep,
}