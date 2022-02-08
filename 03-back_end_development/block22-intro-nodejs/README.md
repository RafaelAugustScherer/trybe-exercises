# Block 22 - Introduction to Web Development w/ Node.js

# Summary

Node.js was created by Ryan Dahl in 2009 as a JavaScript interpreter based on Google Chrome’s V8 Engine. Since then it is **The JavaScript interpreter** used by Google Chrome and the **most used middleware tool** overall.

## Performance

One of the major reasons that made Node.js so popular is the non-blocking operation, that doesn’t block any requests if one is already in process. Its resource allocation is very optimized and it will store every request in the memory and process them in all of the cores available. Works just as a queue model.

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