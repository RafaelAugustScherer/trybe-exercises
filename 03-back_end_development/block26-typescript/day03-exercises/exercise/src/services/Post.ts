import { IUser } from '../interfaces';
import { PostModel } from '../models';
import connection from '../models/connection';

export default class PostService {
  public model: PostModel;

  constructor() {
    this.model = new PostModel(connection);
  }

  public getAll = async (): Promise<IUser[]> => {
    const data = await this.model.getAll();
    return data;
  }

  public async getById(id: number): Promise<IUser> {
    const [data] = await this.model.getById(id);
    return data as IUser;
  }

  public async create(data: IUser): Promise<IUser> {
    const id = await this.model.create(data);

    return { id, ...data };
  }
}
