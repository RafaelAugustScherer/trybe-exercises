import { model as createModel } from 'mongoose';
import { BookSchema, IBook } from '../schemas/BookSchema';

class BookModel {

  constructor(private bookModel = createModel<IBook>('books', BookSchema)) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }

  public async getBook(id: string): Promise<IBook | null> {
    const book = await this.bookModel.findById(id);
    return book;
  }

  public async createBook(data: object): Promise<IBook> {
    const book = await this.bookModel.create(data);
    return book;
  }

  public async editBook(id: string, data: object): Promise<IBook | null> {
    const book = await this.bookModel.findByIdAndUpdate(id, data, { new: true });
    return book;
  }

  public async deleteBook(id: string): Promise<IBook | null> {
    const book = await this.bookModel.findByIdAndDelete(id);
    return book;
  }
}

export default BookModel;