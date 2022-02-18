<aside>
ℹ️ This block goes through the MSC Model and its organization proccess.
**M - Model
S - Service
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

# MSC

## Model

Direct communication with the database. Store entity models, connection methods and execute queries;

## Service

Structure the business rules (logic), methods that will use **Model** methods.

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

## Serialize

The data retrieved from the database will not be in `camelCase`, which is default for variables in JS. For this reason, we are going to serialize it:

```jsx
const serialize = (authorData) => ({
	id: authorData.id,
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