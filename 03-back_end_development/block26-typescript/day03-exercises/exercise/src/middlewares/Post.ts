import { RequestHandler } from 'express';
import { createSchema } from '../schemas/Post';

const createValidation:RequestHandler = (req, res, next) => {
  const { title, author, category } = req.body;
  const { error } = createSchema({ title, author, category });

  // O ideal é fazer essa operação em um middlewares/Error.ts
  if (error) {
    const errMessage = error.details[0].message;
    return res.status(400).json({ error: errMessage });
  }
  return next();
}

export default {
  createValidation
}