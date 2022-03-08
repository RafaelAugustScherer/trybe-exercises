const INTERNAL_ERROR = 'INTERNAL_ERROR';

const errors = {
  NOT_FOUND: {
    code: 404,
    message: 'Id not found',
  },
  MISSING_FIELD: (field) => ({
    code: 400,
    message: `${field} is required`,
  }),
  INTERNAL_ERROR: {
    code: 500,
    message: 'Internal Server Error',
  }
};

const errorMiddleware = (err, _req, res, _next) => {
  let error = undefined;
  console.log(err);
  switch(typeof errors[err.split(':')[0]]) {
    case 'object': {
      error = errors[err];
      break;
    }
    case 'function': {
      const [errString, value] = err.split(':');
      error = errors[errString](value);
      break;
    }
    default: {
      error = errors[INTERNAL_ERROR];
    }
  }
  const { code, message } = error;

  return res.status(code).json(message);
}

module.exports = errorMiddleware;