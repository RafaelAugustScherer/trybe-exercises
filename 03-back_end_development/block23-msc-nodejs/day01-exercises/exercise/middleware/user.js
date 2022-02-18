const userModel = require('../model/user');

const validateFields = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const user = { firstName, lastName, email, password };

  const [_valid, err] = userModel.validate(user);
  if(err) {
      return res.status(400).json({ error: true, message: err })
  }

  req.user = user;
  next();
}

const userExists = async (req, res, next) => {
  const { id } = req.params;

  const foundUser = await userModel.getById(id);

  if (!foundUser) {
    return res.status(404).json({ error: 'true', message: 'Usuário não encontrado' });
  }

  req.user = foundUser;
  next();
}

const readAllUsers = async (_req, res) => {
  const users = await userModel.getAll();
  return res.status(200).json(users);
}

const readUserById = async (req, res) => {
  return res.status(200).json(req.user);
}

const createUser = async (req, res) => {
  const newUser = await userModel.create(req.user);
  res.status(201).json(newUser);
}

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const fields = [firstName, lastName, email, password];
  for (const field of fields)
    if (field && typeof field !== 'string')
      return res.status(400).json({ error: true, message: `O campo ${field} é inválido!` })

  await userModel.update({ firstName, lastName, email, password }, id);
  res.status(200).json({ id, firstName, lastName, email });
}

module.exports = {
  validateFields,
  userExists,
  readAllUsers,
  readUserById,
  createUser,
  updateUserById
}