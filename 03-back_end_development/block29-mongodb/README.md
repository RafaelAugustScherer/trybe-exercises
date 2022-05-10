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

### Filter - First parameter

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