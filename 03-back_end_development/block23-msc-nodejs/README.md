<aside>
ℹ️ This block goes through the MVC Model and its organization proccess.
**M - Model
V - View
C - Controller**

</aside>

# Business Rules

Each system or model has its own business rules. These rules are not decided by anybody, they are inherit to the proccess. **Examples:**

## User Register System

- User will inform name, surname and e-mail;
- E-mail must be unique;
- If the system contain sensible content, user must be above 18 and agree to terms and conditions;
- After the register proccess, an email is sent to verify the user.

## Social Media

- Each post can have a maximum of 300 characters;
- People can comment in other users posts;
- The user can only edit or delete its own posts;
- Any user can block other users and their comments in this user posts.

# MVC

## Model

Direct communication with the database. Store entity models, connection methods and execute queries;

## View

Structure the business rules (logic), methods that will use **View** methods. Does **not** maintain any direct relationship with API requests or database communication.

## Controller

Proccess API requisitions and redirect them to its respective service(s).

**Obs:** If the business rule is less complex, the controller can directly access a Model method.

<details>
<summary>M - Model</summary>

# Creating a Model

## Connecting to MySQL in Node.js

```jsx
// connection.js
const mysql = require('mysql2/promise'); // npm i mysql2

// createPool will keep the connection with the database alive.
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'model_example'
});

module.exports = connection;
```

## Model Methods

```jsx
// models/Author.js
const connection = require('./connection');

const getAll = async () => {
	// Execute the query just like you would in SQL
	const [authors, _fields] = await connection.execute(
	  'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors;
	// result: [ { ...author_one }, { ...author_two }, ... ];
};

const getById = async (id) => {
	// Whenever we want to include a separate variable in a query, we can use '?'
	const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?;';
	const [author] = await connection.execute(query, [id]);
	
	if (!author.length) return null;
	return author;
}

const create = async (firstName, middleName, lastName) => connection.execute(
	'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
	[firstName, middleName, lastName],
);

const isValid = (firstName, middleName, lastName) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (middleName && typeof middleName !== 'string') return false;
	
	return true;
};

module.exports = {
	getAll,
	getById,
	create,
	isValid,
};
```

## Serialize (View Method)

The data retrieved from the database will not be in `camelCase`, which is default for variables in JS. For this reason, we are going to serialize it:

```jsx
const serialize = ({ id, ...authorData }) => ({
	id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name,
});

const getAll = async () => {
	...
	return authors.map(serialize);
}

const getById =  async (id) => {
	...
	return serialize(author[0]);
}
```

## Express Routes

```jsx
// index.js
const Author = require('./models/Author');

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;
	const author = await Author.getById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
	const { firstName, middleName, lastName } = req.body;

	if (!Author.isValid(firstName, middleName, lastName)) {
		return res.status(400).json({ message: 'Invalid Data' });
	}

	await Author.create(firstName, middleName, lastName);
	res.status(201).json({ message: 'Author created successfully!'});
});
```
</details>

<details>
<summary>V - View</summary>

# Method Distribution

**Taking as example this Model:**

```jsx
// models/Author.js
const connection = require('./connection');

/*
const serialize = (authorData) => ({
	id: authorData.id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name,
});
*/

const getAll = async () => {
	const [authors, _fields] = await connection.execute(
	  'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors;
				//.map(serialize);
};

const create = async (firstName, middleName, lastName) => connection.execute(
	'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
	[firstName, middleName, lastName],
);

/*
const isValid = (firstName, middleName, lastName) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (middleName && typeof middleName !== 'string') return false;
	
	return true;
};
*/

module.exports = {
	getAll,
	create,
};
```

The following can be delegated to the View: `serialize(), isValid()`. It will then be responsible for the **business rules:**

```jsx
// views/Author.js

const Author = require('../models/Author.js')

const serialize = ({ id, ...authorData }) => ({
	id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name,
});

const isValid = (firstName, middleName, lastName) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (middleName && typeof middleName !== 'string') return false;
	
	return true;
};

const getAll = async () => {
	const author = await Author.getAll();
	return author.map(serialize);
};

const create = async (firstName, middleName, lastName) => {
	const valid = isValid(firstName, middleName, lastName);
	if (!valid) return false;
	
	const [data] = await Author.create(firstName, middleName, lastName);
	return { id: data.insertId, firstName, middleName, lastName };
}
```

## What about the index?

```jsx
const Author = require('./views/Authors');

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();
	res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  const author = await Author.create(firstName, middleName, lastName);

  if (!author) return res.status(400).json({ message: 'Invalid data' });

  res.status(201).json(author);
});
```

Very similar, right? That’s pretty much it.
</details>

<details>
<summary>C - Controller</summary>

# Importing from index

```jsx
// controllers/Author.js

const Author = require('../views/Author');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
};

const create = async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  const author = await Author.create(firstName, middleName, lastName);
  if (!author) return res.status(400).json({ message: 'Invalid Data' });

  res.status(201).json(author);
};

module.exports = {
  getAll,
  createAuthor,
};
```

```jsx
// controllers/router.js
const express = require('express');

const Author = require('./Author.js');
const AuthorRouter = express.Router();

AuthorRouter.get(Author.getAll);
AuthorRouter.post(Author.create);

module.exports = {
	AuthorRouter,
};
```

## The Clean View - Index

```jsx
const express = require('express');

const app = express();

const { AuthorRouter } = require('./controllers/router');

app.use(express.json());

app.use('/authors', AuthorRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
```

Looking good!
</details>

# Validations

There is no right place to place validation blocks, but there are some neat ways to do it. Creating a separated **Schema** and **Middleware** might be the best option!

## Schema

```jsx
// schemas/Author.js

// First create a 'dictionary'
const errors = {
	first_name_blank: 'first_name cannot be blank',
	first_name_not_string: 'first_name must be a string',
	first_name_less_than_three: 'first_name must have at least 3 characters',
	middle_name_not_string: 'middle_name must be a string',
	last_name_blank: 'last_name cannot be blank',
	last_name_not_string: 'last_name must be a string',
}

const blank = value => !value;
const isNotString = value => typeof value !== 'string';
const isLengthLessThan = (value, min) => value.length < min;

// Then validate every field
const validate = (first_name, middle_name, last_name) => {
	const code = 422;
	switch(true) {
		case blank(first_name): return { code, message: errors.first_name_blank }
		case isNotString(first_name): return { code, message: errors.first_name_not_string }
		...
		default: return {};
	}
}

module.exports = validate;
```

## Middleware

```jsx
// middlewares/Author.js
const validate = require('../schemas/Author.js');

const validateAuthor = (req, res, next) => {
	const { first_name, middle_name, last_name } = req.body;

	const { code, message } = validate(first_name, middle_name, last_name);
	if (message) return res.status(code).json({ message });

	next();
}

module.exports = validateAuthor
```

### Updates in Router

```jsx
// controllers/router.js

const validateAuthor = require('../middlewares/Author.js');

AuthorRouter.post(validateAuthor, Author.create);
```

# Enviroment Variables

Save sensible information as Enviroment Variables. For that, use the package `dotenv`.

## .env

```
PORT=3000
MYSQL_HOST=localhost
MYSQL_DB_NAME=model_example
MYSQL_DB_USER=root
MYSQL_DB_PASSWORD=*****
```

```jsx
// index.js
require('dotenv').config();

const PORT = process.env.PORT;

// models/connection.js

const connection = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_DB_USER,
	...
});

// .gitignore
.env
```