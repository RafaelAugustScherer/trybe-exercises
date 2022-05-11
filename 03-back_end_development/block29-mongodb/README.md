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

## Projection - Second parameter

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

## Query Operators

- `$all` - Every item in the array exists in the document

```jsx
db.inventory.find({ tags: { $all: [ "ssl", "security" ] } });
// Every document with tags sll and security
```

- `$elemMatch` - Document contains an object that has following items

```jsx
db.scores.find({ results: { $elemMatch: { $gte: 80, $lt: 85 } } });
// Every document with 'results' containing an array with number between 80 and 84

db.survey.find({ results: { $elemMatch: { product: "Keyboard" } } });
// Every document with 'results' containing an object with product: 'Keyboard'
```

- `$size` - Document contains an array with `number` size

```jsx
db.products.find({ tags: { $size: 2 } }); // Every document where tags.length = 2
```

- `$expr` - Used to make more complex expressions, like comparing fields

```jsx
db.monthlyBudget.find({ $expr: { $gt: [ "$spent", "$budget" ] } });
// Every document where 'spent' is greater than 'budget'
```

- `$regex` - Use the powers of regular expressions to filter documents

```jsx
db.products.find({ sku: { $regex: /^ABC/i } });
// Every document where 'sku' contains abc. (/i is for case insensitive)
```

- `$mod` - Filter fields based on their quotient (division)

```jsx
db.inventory.find({ qty: { $mod: [4, 0] } });
// Every document where 'qty' is perfectly divisible by 4
```

## Count

```jsx
db.heroes.count(); // Number of documents in heroes collection
db.heroes.count({ publisher: 'Marvel' });
// Number of documents where publisher = 'Marvel' in heroes collection
```

## Distinct

```jsx
db.heroes.distinct("publisher") // Number of different publishers in heroes collection
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