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