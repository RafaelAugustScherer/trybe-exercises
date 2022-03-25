import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/IPost';

export default class PostModel {
  constructor(private connection: Pool) {}

  public async getAll(): Promise<IUser[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM posts;');
    return result as IUser[];
  }

  public async getById(id: number): Promise<IUser[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM posts WHERE id = ?;', [id]);
    return result as IUser[];
  }

  public async create(data: IUser): Promise<number> {
    const { title, author, category } = data;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO posts (title, author, category)
       VALUES (?, ?, ?);`,
      [title, author, category]);

    return insertId;
  }
}
