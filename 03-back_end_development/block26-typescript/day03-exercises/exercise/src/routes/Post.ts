import { Router } from 'express';
import middleware from '../middlewares/Post';
import { PostController } from '../controllers';

const router = Router();

const controller = new PostController();

router
  .route('/')
  .get(controller.getAll)
  .post(middleware.createValidation, controller.create)

router
  .route('/:id')
  .get(controller.getById)

export default router;
