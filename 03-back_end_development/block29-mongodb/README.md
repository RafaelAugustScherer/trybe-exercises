# Block 29 - MongoDB

MongoDB is an alternative to conventional SQL databases. It is one of the most popular NoSQL databases and it is primarly used because of performance, scalability and ease-of-use.

It is especially easy to use with **JavaScript**!

# Terminology - MongoDB vs SQL

- **Cluster = Server;**
- **Collection = Table;**
- **Document = Row;**

# Creating and Seeding Collections

## Explicit Creation

If the collection doesn’t exist, Mongo will automatically create it with the Insert data. But if you want to create an empty collection, you can do:

```jsx
db.createCollection( "collectionName", { ...[options] } );
```

## Inserting data

You can `insertOne` or `insertMany` data in a collection. Check it out:

```jsx
db.insertOne({ name: 'Johnny', age: undefined });
db.insertMany([{ name: 'Carlos', age: 11 }, { name: 'Amy', age: 23 }]);
```

# Querying Collections

## Find method

Just like SELECT in SQL:

```jsx
db.movies.find() // Find every document in the collection as an array
db.movies.findOne({ title: "Forrest Gump" }); // Find a movie with title = 'Forrest Gump'
```

<aside>
⚠️ **Disclaimer: Method `find` does not return every field in the database.** To force this, you need to do something like: `db.movies.find().toArray()`

</aside>

## Filter - First parameter

Just like WHERE in SQL:

```jsx
db.collection.find( { quantity: { $gt: 4 } } ); // Every document where quantity > 4
```

More of filter related content [here](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/#find-all-documents-in-a-collection)!

### Projection - Second parameter

In the case that you want only specific fields to be returned, you can specify them as well:

```jsx
db.movies.findOne(
	{ title: "Forrest Gump" },
	{ title: 1, imdb_rating: 1 } // Return object as { title, imdb_rating }
);
```

### Limit

You can limit the amount of data returned:

```jsx
db.movies.find({ $orderby: { imdb_rating: -1 } }).limit(5); // Return top 5 imdb_rating movies
```

---

## Filter

More on filtering data in MongoDB.

### Comparsion operators

- `$lt`, `$gt` **= less than, greater than;**
- `$lte`, `$gte` **= less than or equal, greater than or equal;**
- `$eq`, `$ne` **= equal, not equal;**
- `$in`, `$nin` **= in, not in (object);**

### Logic operators

- `$and`, `$or` **= and, or;**
- `$not`, `$nor` **= not, not or ;**

### Usage

Logic operators, if used, need to come before comparsion operators.

```jsx
db.collection.find({ quantity: { $lt: 5 } }); // Documents with quantity < 5
db.collection.find({ quantity: { $in: [5, 15] } }); // Quantity equal to 5 or 15
db.collection.find({ quantity: { $or: [{ $eq: 5 }, { $eq: 15 }] } }); // Same as above

db.inventory.find({ price: { $not: { $gt: 1.99 } } }); // Price not greater than 1.99
db.inventory.find({ price: { $lte: 1.99 } }); // Same as above
db.inventory.find({ $nor: [{ price: { $lte: 1.99 } }, { quantity: 5 }] });
// Price is not less than or equal to 1.99 and/or quantity is not 5
```

## Sort

Similar to ORDER BY in SQL.

```jsx
db.collection.find({}).sort({ quantity: 1 }); // Sort by quantity ascending
db.collection.find({}).sort({ quantity: -1 }); // Sort by quantity descending

db.collection.find({}).sort({ quantity: -1 }, { price: 1 });
// Sort by quantity descending, price ascending
```

# Deleting Documents

Work similarly to `insertOne` and `insertMany`:

### deleteOne()

```jsx
db.inventory.deleteOne({ quantity: 100 }); // Delete first document with quantity 100
db.inventory.deleteOne({ _id: "12ajg23" }); // Delete document with _id = 12ajg23
```

### deleteMany()

```jsx
db.inventory.deleteMany({ price: { $gt: 100 } }); // Delete every with price greater than 100
db.inventory.deleteMany({}); // Delete every document in collection
```