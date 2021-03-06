# Block 22 - Introduction to Web Development w/ Node.js

# Summary

Node.js was created by Ryan Dahl in 2009 as a JavaScript interpreter based on Google Chrome’s V8 Engine. Since then it is **The JavaScript interpreter** used by Google Chrome and the **most used middleware tool** overall.

## Performance

One of the major reasons that made Node.js so popular is the non-blocking operation, that doesn’t block any requests if one is already in process. Its resource allocation is very optimized and it will store every request in the memory and process them in all of the cores available. Works just as a queue model.

<details>
<summary>Part 1 - Starting Up and Node Modules</summary>

# Modules

Modules work as a **set of utilities** that help with the code development.

## [Core Modules](https://nodejs.org/api/)

Some of them are called Core Modules, which means that they come as standard with `npm init.` They don’t need to be installed afterwards.

## [Third-party Modules](https://www.npmjs.com/)

These do not come as official Node.js modules. They can be created by literally anyone. A big company, web community, known developer, you name it!

## Local Modules

Local Modules are the ones created for this specific project by the developers. Work the same way as other modules.

## CommonJS

To use these modules in our project we cannot just yet use ES6’s `import` natively with Node.js. For this reason we are using CommonJS’s `require()` , which is a built-in module system by Node.js

# Let’s Code!

## Local Modules

```jsx
// utils.js
const brl = 5.4;
const usdToBrl = (usd) => usd * brl;

**module.exports** = usdToBrl; // export usdToBrl;

// index.js
const convert = **require('./utils')**; // import convert from './utils'
console.log(convert(10)) // 54
```

## Third-party / Core Modules

```jsx
const fs = require('fs');
fs.readFileSync('./myFile.txt');
```

## Run!

```jsx
// package.json
{
	...
	"scripts": {
		"start": "node index.js"
	}
}
/* bash: npm start */
```

# Misc - Third-party Modules

## Readline

```jsx
/* bash: npm i readline-sync -d */
const readline = require('readline-sync');

const name = readline.question('What is your name? ');
const age = readline.questionInt('What is your age? ');

console.log(`Hello, ${name}! You are (already) ${age} years old!`);
```
</details>

<details>
<summary>Part 2 - Async Operations</summary>

# Callbacks VS Promises

The major advantages of working with **Promises** instead of Callbacks is that we **avoid Callback Hells**, make the **code more readable** and we can **specify one error for every operation**.

## Working With Callbacks

```jsx
const fs = require('fs');

fs.readFile('file1.txt', (err, file1Content) => {
  if (err) return console.log(`Error while reading file1.txt: ${err.message}`);
  console.log(`file1.txt has ${file1Content.byteLength} bytes`);

  fs.readFile('file2.txt', (err, file2Content) => {
    if (err) return console.log(`Error while reading file2.txt: ${err.message}`);
    console.log(`file2.txt has ${file2Content.byteLength} bytes`);

    fs.readFile('file3.txt', (err, file3Content) => {
      if (err) return console.log(`Error while reading file3.txt: ${err.message}`);
      console.log(`file3.txt has ${file3Content.byteLength} bytes`);
    });
  });
});
```

## Working With Promises

```jsx
const fs = require('fs');

readFilePromise('file1.txt')
  .then((content) => {
    console.log(`file1.txt has${content.byteLength} bytes`);
    return readFilePromise('file2.txt');
	})
  .then(content => {
    console.log(`file2.txt has ${content.byteLength} bytes`);
    return readFilePromise('file3.txt');
  })
  .then((content) => {
    console.log(`file3.txt has ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.error(`Error while reading files: ${err.message}`);
  });
```

## Native Implementation - Sync

```jsx
try {
  const fileOne = fs.readFileSync('file1.txt', 'utf8');
  console.log(`file1.txt has ${fileOne.byteLength} bytes`);

	const fileTwo = fs.readFileSync('file2.txt', 'utf8');
  console.log(`file1.txt has ${fileTwo.byteLength} bytes`);

	const fileThree = fs.readFileSync('file3.txt', 'utf8');
  console.log(`file1.txt has ${fileThree.byteLength} bytes`);
} catch (err) {
  console.error(`Error while reading files: ${err.message}`);
}
```

# Promise.all

Run a sequence of Promises all at once and receive their respective results in an array. Yes, that’s right.

```jsx
const fs = require('fs').promises;

Promise.all([
	fs.readFile('file1.txt'),
	fs.readFile('file2.txt'),
	fs.readFile('file3.txt'),
])
	.then([fileOne, fileTwo, fileThree]) => {
		console.log(`file1.txt has ${fileOne.byteLength} bytes`);
		console.log(`file2.txt has ${fileTwo.byteLength} bytes`);
		console.log(`file3.txt has ${fileThree.byteLength} bytes`);
	})
	.catch(err => console.error(`Error while reading files: ${err.message}`));
```
</details>

<details>
<summary>Part 3 - Tests with Mocha & Chai</summary>

```bash
npm install -D mocha chai
```

# Test Types

## Unitary Tests

Test a limited scope, a little fragment of the project with minimal interaction with external resources. Example of function to test:

```jsx
const sum = (a, b) => a + b;
module.exports = sum;
```

## Integration Tests

Unite multiple fragments and test the interactions between them.

```jsx
const sum = require('/sum');
const subtract = require('/subtract');

// test sum & subtract
```

## Peer To Peer Tests

Test an API request and the expected result for example.

```jsx
axios.get('localhost:5000/user');
```

# TDD - Test Driven Development

This development model proposes that tests should be done before the development of the project itself. This way we avoid the necessity of redoing a piece of code in a case of failure in the tests.

So we should do in order:

1. Interpretate the requirements thinking about the behaviours. Inputs, outputs, etc;
2. Create the **describe(), it()** structure;
3. Call the assertions for validation (yes, all the tests will fail for now);
4. Write the code implementation to pass all the tests.

# Structuring Tests

## Setup

```json
npm init
npm install -d mocha chai
```

```json
// package.json
{
	...
	"scripts": {
		"test": "mocha tests"
	}
}
```

## Creating a Test

```jsx
// tests/operations.js
**const { expect } = require('chai');**
const { sum, subtract } = require('../operations');

// divide the tests into 'sections' with **describe()**
describe('Testing the behaviour of operations.js', () => {
	// use **it()** to detail the current test
	it('Expect sum(5, 5) to return 10', () => {
		const answer = sum(5, 5);
		**expect(answer).equals(10);**
	});
	it('Expect subtract(10, 5) to return 5', () => {
		const answer = subtract(10, 5);
		**expect(answer).equals(5);**
	});
})
```

## Creating the Test Resolution

```json
// operations.js
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { sum, subtract };

// bash: npm test
```

# Test Doubles

In a more complex scenario where we need to test external factors, like reading a file content, we cannot rely on the file to be there. We need to create an isolated ambient, just to test the function / code behaviour.

That’s why we have the Test Doubles!

## Sinon

```jsx
// bash: npm install -D sinon

const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');
const readFileFunc = require('./readFile');

const FILE_CONTENT = 'Example test';

describe('Test readFile.js', () => {
	describe('When file exists', () => {
		before(() => {
			// Whenever a call to fs.readFileSync is made, the return will be FILE_CONTENT
			sinon.stub(fs, 'readFileSync').returns(FILE_CONTENT);
		});

		after(() => fs.readFileSync.restore());

		it('Test if file content is expected', () => {
			const result = readFileFunc('file.txt');
			expect(result).to.be.equals('Example Test');
		});
	});

	describe('When file does not', () => {
		before(() => {
			sinon.stub(fs, 'readFileSync').throws(new Error('File was not found!'));
		});

		after(() => fs.readFileSync.restore());

		it('Test if file content is expected', () => {
			const result = readFileFunc('otherFile.txt');
			expect(result).to.be.equals(null);
		});
	});
})
```
</details>
<details>
<summary>Part 4 - Express - HTTP w/ Node.js</summary>

# HTTP

## Why?

HTTP is the most used Web Protocol for data transfer. We will be using HTTP and its methods (GET, PUT, POST, DELETE, etc) to send data between our application and the API that we’ll be creating with Express. 

## How?

The data will be sent through Headers and Bodies of these HTTP requisitions. More information at [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP)

# Express

Express is yet another NPM module to help the API to interact with the Application through HTTP.

```bash
npm install express
```

```jsx
// index.js
const express = require('express');

const app = express(); // Start Express

// Create a function to handle a request
const handleHelloWorldRequest = (_req, res) => {
  res.status(200).send('Hello World!');
}

app.get('/hello', handleHelloWorldRequest); // Associate a route to the function

// Start listening to requests at 3001 port
app.listen(3001, () => {
  console.log('server is running!');
});
```

> Whenever a GET request is made to `localhost:3001/hello`, the answer body is going to be ‘Hello World!’

Try to access the link through your browser, and see what happens ;)
> 

## Nodemon

This will work just like Live Server, but with Node.js. Whenever you change a file, reload the application.

```bash
npm i nodemon -D
```

```json
// package.json
"scripts": {
	"server": "nodemon index.js"
}

// bash: npm run server
```

## Routing

Routes are basically **paths** that the application will access to communicate with the Express API.

Each path can have up to one of each method (GET, POST, etc)

```jsx
let currentUser = '';

app
	.route('/user')
	.get((_req, res) => {
		res.send({ name: 'John Doe', age: undefined });
	})
	.post(req, res) => {
		currentUser = req.body.name;
		res.status(200);
	});
```

### Parameters

Similar to React Router, we can get URL parameters as `req.params`

```jsx
app
	.route('/user/:id')
	.get((req, res) => {
		const { id } = req.params;
		const user = await findUserById(id);
		res.send({ ...user });
	});
```

---

Parameters can also be sent as **Query strings**. Example:

```jsx
// request: localhost:3001/user/id=123
app
	.route('/user')
	.get((req, res) => {
		const { id } = req.query;
		...
	});
```

## Body

Another way to receive data is through `req.body`. For that we will need to use `express.json()` to receive JSON data.

```jsx
// index.js
const express = require('express');
const app = express()
app.use(express.json());

// routes/user.js
app
	.route('/user')
	.post((req, res) => {
		const user = req.body;
		saveUserInDatabase(user)
			.then(() => res.status(201).send('User created successfully')
			.catch((err) => res.status(400).send(err));
	});
```

## Params VS Body

`req.param`: Used to send query data. The identifiers of request related data.

`req.body`: Used to send “Raw” data. Everything that is stored or retrieved from the database.
</details>

<details>
<summary>Part 5 - Express - Middlewares</summary>

# Middleware

A middleware is essentialy any code block that work as an **intermediate** between an **application** and **one or more sets of data** **(database).**

## Express Middlewares

All of the functions that treat routes are considered middlewares. `.get(req, res, next)`, `.post(req, res, next)`, etc.

## Next()

Ever wondered what the `next` parameter is all about? You can chain middlewares!

One practical example would be to **first** **authenticate** the user and **then treat the request**:

```jsx
router.get((req, res, next) => {
	const { user, password } = req.headers;
	// authenticate
	next();
},
(req, res) => {
	const { data } = req.body;
	// treat request
});

/* Or simply save the function for more requests */

const authenticate = (req, res, next) => {
	// authenticate
	next();
}

router.get(authenticate, (req, res) => {
	const { data } = req.body;
	// treat request
});
```

# app.use() & app.all()

```jsx
const authenticate = (req, res, next) => {
	// authenticate
	next();
}

app.get( ... )

app.use(authenticate);

app.post( ... )
```

All of the routes that came **after** `app.use( )` will go through the `authenticate` middleware. In this case, `app.post( )`.

---

```jsx
app.all('*', function (req, res) {
	return res.status(404).json({ message: `${req.path} not found!`});
});
```

This is generally placed at the **end** of the Express index.js file. If no path was found for the request, it will fall in this `404 - Not Found` error.

## Extra `req` keys

Suppose you want to get a user information, but you also have to go through the authentication process before.

You would search for the user in both middlewares? Check this out:

```jsx
const authenticate = (req, res, next) => {
	const { username, password } = req.headers;
	const user = database.find((user) => user.username === username);
	// authenticate
	
	req.user = user;
	next();
}

app.get('/user/:id', authenticate, (req, res) => {
	const user = req.user;
	// ...
})
```

# CORS

Allow for communication between front-end applications and the Express backend.

```jsx
// index.js
const Express = require('express');
const cors = require('cors');

const app = Express();
app.use(cors());
```

# Error Middlewares

## Sequence Call

Function MUST receive 4 parameters to indicate Express that it is an Error Middleware.

```jsx
app.get( ... );

app.use((err, _req, _res, _next) => {
	console.error(err);
});
```

## `Next(err)` Call

Whenever there is an error inside your middleware, you should call an Error Middleware that is placed down the “Express road”.

```jsx
app.get('/', async (req, res, next) => {
	try {
		...
	}
	catch (err) {
		if ([error]) next(err);
	}
})
```

## Auto Call with `express-rescue`

What this package does in essence is **wrap** the middleware code in a `try... catch` block, and call **next(err)** whenever there is an error.

```jsx
const rescue = require('express-rescue');
// ...
app.get('/', rescue(async (req, res) => {
	
});

app.use((err, _req, res, next) => {
	res.status(500).json({ error: err.message });
});
```
</details>