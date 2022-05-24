# Block 30 - Mongoose (ODM) & OOP

Mongoose is simmilar in functionality to its relational brother, **Sequelize.** It provides a Model structure to the Node application, so it can have access to the database.

# Setup & Connection

```bash
npm init -y
npm i -D typescript // optional
npm i mongoose
```

```tsx
// index.ts
import { connect, ConnectOptions } from 'mongoose';

const options: ConnectOptions = {
  user: '',
  pass: '',
  autoIndex: true, // Should mongodb auto-create an index for each document
  dbName: 'myDatabase',
};

connect('mongodb://localhost:27017/', options);
```

# Model

## Schema

The schema is a way to **enforce typing in MongoDB**. The database won’t set any limitation on how or what is being saved, this responsability is delegated to mongoose and its schemas.

```tsx
interface Book {
  title: string,
  author: string,
}

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true },
}, {
	versionKey: false, // Optional
});
```

This schema won’t let data through unless it is an object with `title` and `author` fields filled.

## Model

```tsx
const bookModel = model<Book>('books', bookSchema);
bookModel.find(); // every book in 'books' collection in the schema format
```

**Just like that!** This constant now contains every MongoDB manipulation method for books collection, like `find()`, `insertOne()`, `updateByIdAndDelete()`, etc.

It doesn’t need any information about the connection, as it will automatically use the one started with `mongoose.connect()` anywhere in the code. Awesome!