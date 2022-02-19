const { StatusCodes } = require('http-status-codes');

const validateCep = (cep, method) => {
  const errors = {
    invalid_cep: { code: StatusCodes.BAD_REQUEST, message: 'CEP Inválido' },
  }

  const isBlank = value => !value;
  const isGetRegexInvalid = value => !RegExp(/\d{5}-?\d{3}/).test(value)
  const isPostRegexInvalid = value => !RegExp(/\d{5}-\d{3}/).test(value)
  
  switch(method) {
    case 'GET' && isBlank(cep) || isGetRegexInvalid(cep):
      return errors.invalid_cep;
    case 'POST' && isBlank(cep) || isPostRegexInvalid(cep):
      return errors.invalid_cep;
    default:
      return { code: StatusCodes.OK };
  }
}

module.exports = { validateCep };