const { StatusCodes } = require('http-status-codes');
const productModel = require('../models/productModel');

const errors = {
  couldNotProccess: { code: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Could not proccess request.' },
  notFound: (id) => ({ code: StatusCodes.NOT_FOUND, message: `There is no product with id: ${id}` }),
  missingField: (field) => ({ code: StatusCodes.BAD_REQUEST, message: `Required fields are missing: ${field}` })
};

const add = async (name, brand) => {
  const response = await productModel.add(name, brand);
  return !response
    ? errors.couldNotProccess
    : response;
}

const getById = async (id) => {
  if (!id) return errors.missingField('id');

  const response = await productModel.getById(id);

  return !response
    ? errors.notFound(id)
    : response;
}

const update = async (id, name, brand) => {
  if (!id) return errors.missingField('id');

  const response = await productModel.update(id, name, brand);

  return !response
    ? errors.notFound(id)
    : response;
}

const exclude = async (id) => {
  if (!id) return errors.missingField('id');
  const response = await productModel.exclude(id);

  return !response
    ? errors.notFound(id)
    : response;
}

module.exports = {
  add,
  getById,
  update,
  exclude
}