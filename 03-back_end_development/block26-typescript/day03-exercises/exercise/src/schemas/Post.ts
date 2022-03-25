import Joi from 'joi';
import { IUser } from '../interfaces';

const createSchema = (data: IUser) => {
  const schema = Joi.object({
    title: Joi.string(),
    author: Joi.string().min(3),
    category: Joi.string().min(3),
  });

  return schema.validate(data);
}

export {
  createSchema
}