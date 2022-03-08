const errors = {
  MISSING_FIELD: (field) => `MISSING_FIELD:${field}`
}

const create = (req, _res, next) => {
  const { title, author, pageQuantity } = req.body;
  const requiredFields = {
    title, author, pageQuantity
  }

  const invalidField = Object.entries(requiredFields).find(([, value]) => !value);

  if (invalidField) {
    return next(errors.MISSING_FIELD(invalidField[0]));
  }

  req.data = requiredFields;
  next();
};

const update = (req, _res, next) => {
  const { title, author, pageQuantity } = req.body;
  const updateFields = { title, author, pageQuantity };

  const fieldsToUpdate = Object.entries(updateFields)
    .reduce((acc, [field, value]) => value ? { ...acc, [field]: value } : acc, {});
  
    req.data = fieldsToUpdate;
  next();
};

module.exports = {
  create,
  update,
}