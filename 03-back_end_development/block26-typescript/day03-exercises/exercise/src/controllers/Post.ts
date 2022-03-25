import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { PostService } from '../services';

export default class PostController {
  service: PostService;

  constructor() {
    this.service = new PostService();
  }

  // Declaração de tipo tradicional
  public getAll = async (_req: Request, res: Response): Promise<Response> => {
    const data = await this.service.getAll();
    return res.status(StatusCodes.OK).json(data);
  }

  // Declaração de tipo com RequestHandler
  public getById:RequestHandler = async (req, res) => {
    const { id } = req.params;
    const data = await this.service.getById(+id);
    
    return res.status(StatusCodes.OK).json(data);
  }

  public create:RequestHandler = async (req, res) => {
    const { title, author, category } = req.body;
    const data = await this.service.create({ title, author, category });
    
    return res.status(StatusCodes.OK).json(data);
  }
}
