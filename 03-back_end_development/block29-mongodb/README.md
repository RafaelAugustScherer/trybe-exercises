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

<details>
<summary>Querying Collections</summary>

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
</details>

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
<details>
<summary>Updating Collections</summary>

First parameter is an object with the filter (WHERE);

Second parameter is an object with the fields to update (SET);

## updateOne()

```jsx

db.inventory.updateOne({ item: "paper" }, { $set: { "size.uom": "cm", status: "P" } });
// Update first document where item = 'paper'
```

## updateMany()

```jsx
db.inventory.updateMany({ "qty": { $lt: 50 } }, { $set: { "size.uom": "in" } });
// Update all documents where qty is less than 50
db.inventory.updateMany({}, { $set: { "size.uom": "in" } });
// Update all documents in collection
```

## `$set`

Directly **set** values to fields

### Top Level Updates - Conventional

```jsx
db.products.updateOne(
	{ _id: 100 },
	{ $set: { quantity: 500, tags: [ "coats", "outerwear", "clothing" ] } }
);
```

### Embedded Updates - Dot notation

Used to update object keys, while keeping the rest of the object intact

```jsx
db.products.updateOne(
  { _id: 100 },
  { $set: { "details.make": "Adidas" } }
);
```

### Array Updates - Numbered dot notation

```jsx
db.products.updateOne(
  { _id: 100 },
  { $set: { "tags.1": "rain gear", "ratings.0.rating": 2 } }
);
```

## `$inc`

Increment or Decrement number values

```jsx
// Doc. Before -> { _id: 5, quantity: 10, totalSold: 52 }
db.inventory.updateOne(
	{ _id: 5 },
	{ $inc: { quantity: -2, totalSold: 2 } }
);
// Doc. After -> { _id: 5, quantity: 8, totalSold: 54 }
```

## `$min, $max`

Compare field to given value and update to the minimum or maximum between them

```jsx
// Docs. Before -> 
// { _id: 5, security: 4.2, technology: 3.8 }
// { _id: 6, security: 4.8, technology: 4 }
db.requirements.updateOne(
	{},
	{ $max: { security: 4.5 }, $min: { technology: 3.9 } }
);
// Docs. After ->
// { _id: 5, security: 4.5, technology: 3.8 }
// { _id: 6, security: 4.8, technology: 3.9 }
```

## `$currentDate`

Set a field to current Date. As a `timestamp` or `Date`. By default it uses the `Date` format, you can change that by specifying a `$type`.

```jsx
// Doc. Before -> { _id: 1, lastModified: ISODate("2013-10-02T01:11:18.965Z") }

db.customers.updateOne(
	{ _id: 1 },
	{ $currentDate: { lastModified: true, "cancellation.date": { $type: "timestamp" } } }
);
// Doc. After ->
// {
//   _id: 1,
//   lastModified: ISODate("2022-05-12T04:25:23.965Z"),
//   cancellation: { date: Timestamp(1579728101, 1) }
// }
```

## `$rename, $unset`

Rename or remove fields from documents'

```jsx
db.inventory.updateMany({}, { $rename: { "name": "productName" } });
// Rename 'name' to 'productName'

db.inventory.updateMany({}, { $unset: { "color": "" } });
// Remove field 'color'
```

## Array Updates

### `$push - $each, $sort, $slice`

```jsx
db.inventory.updateOne(
	{ _id: 1 },
	{ $push: { items: { { name: 'eraser', price: 3.5 } } } }
); // Push to/create array 'items' inside document with _id = 1
```

---

```jsx
db.inventory.updateOne(
	{ _id: 1 },
	{
		$push: {
			items: {
				$each: [
					{
						name: 'pen',
						price: 3.2,
					},
					{
						name: 'notebook',
						price: 12,
					},
				],
				$sort: { price: -1 } // Optional
				$slice: 2 // Optional
			}
		}
	}
);
```

The code above does the following:

- Update document with `_id = 1`;
- Create or push to `items` array inside this document;
- Sort this array by price descending;
- Keep only the first two items of this array (slice).

### `$pop`

Remove first (-1) or last(1) item from an array

```jsx
db.inventory.updateMany(
	{},
	{ $pop: { items: 1 } } // Remove last item from 'items' in every document
);
```

### `$pull`

Remove items that fulfill a condition

```jsx
db.profiles.updateOne(
  { _id: 1 },
  { $pull: { votes: { $gte: 6 } } },
);
// Remove every number in 'votes' array that is equal or greater to 6
```

### `$addToSet`

Works the same way as $push, but if you try to push a duplicate value, it won’t push, treating the array as a set

```jsx
// Doc. Before => { _id: 1 }
db.inventory.updateOne(
	{ _id: 1 },
	{ $addToSet: { items: { { name: 'eraser', price: 3.5 } } } }
); // Create array 'items' inside document with _id = 1

// Doc. => { _id: 1, items: { name: 'eraser', price: 3.5 } }
db.inventory.updateOne(
	{ _id: 1 },
	{ $addToSet: { items: { { name: 'eraser', price: 3.5 } } } }
); // Doesn't allow for duplicates

// Doc. => { _id: 1, items: { name: 'eraser', price: 3.5 } }
```

```jsx
db.inventory.updateOne({ _id: 1 }, {
	$addToSet: {
		tags: {
			$each: ["clothing", "shirt"] // Will try to push 'clothing' and 'shirt' to tags
		}
	}
});
```

### `arrayFilters`

Use an array filter to apply an update on a specific item.

```jsx
db.recipes.updateOne(
  { title: "Simple Pancake" },
  {
    $set : {
      "ingredients.$[e].measurementUnit": "cup",
    },
  },
  { arrayFilters: [ { "e.name": "Flour" } ] },
);
// In document with title = 'Simple Pancake', set measurementUnit = 'cup'
// in 'ingredients' array where ingredient name = 'Flour'
```
</details>