import { Router } from 'express';
import postRouter from './Post';

const router = Router();

router.use('/post', postRouter);

export default router;