const express = require('express');

const router = express.Router();

const {
  validateFields,
  userExists,
  readAllUsers,
  readUserById,
  createUser,
  updateUserById
} = require('../middleware/user');

router
  .route('/')
  .get(readAllUsers)
  .post(validateFields, createUser);

router
  .route('/:id')
  .get(userExists, readUserById)
  .put(userExists, updateUserById);

module.exports = router;