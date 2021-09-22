# 10.1. Jest - First Steps

## What is Jest?

Jest is a code **testing framework**, used to make testing **simple** & **fast**.

## Why Jest?

The assert module does work properly, and will give you the test results that you need. The problem is that the more files & code you need to handle with assert, the harder it gets to separate those tests, run all of the test files together and make it quick! That's why Jest is here to save the day.

## How Jest?

```jsx
// npm is required

/* Create Project Directory (if not already created) */
mkdir myProject
cd myProject

/* Init npm */
npm init -y

/* Install Jest */
// Inside the package.json file, change the key "test": "jest",
npm install --save-dev jest
```

There you go! **Jest is now installed!**

## Creating Tests

To create a test is quite simple really, just make sure that the file has **.test.js** in it so Jest knows that this file must be tested, watch:

```jsx
// sum**.test.js**

/* Syntax */
test([testDescription], () => expect([codeResult]).toEqual([expectedResult]));

/* Example */
test('Simple Sum', () => expect(2 + 4).toEqual(6));
```

Simply running `npm test` will return:

![Captura de tela de 2021-09-21 15-25-28.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f723ebee-64e1-42ff-b78f-1c61488cd2d2/Captura_de_tela_de_2021-09-21_15-25-28.png)

### Separated Test From Code

```jsx
// sum.js
const sum = (a, b) => a + b;

module.exports = sum;
```

```jsx
// sum.test.js
const sum = require('./sum');

test('Simple Sum', () => expect(sum(2, 4)).toEqual(6));
```

## Learning Jest

### toBe() vs toEqual()

- toBe() === strictEqual()
- toEqual() === deepStrictEqual()

### Common Properties

- **toContain**: Check if array contains specified value;
- **toHaveLength**: Check if .length() property matches specified number;
- **toBeInstanceOf**: Check if is typeof. Ex: `.toBeInstanceOf(Function)`

### Throw Error

Expect the call to throw an error, must be called within a function inside `expect`:

```jsx
test(, () => {
	expect(() => testFunc()).toThrowError(new Error('Error'));
})
```

### Not

```jsx
test('Simple Sum', () => expect('Foo').not.toEqual('Bar'));
```

### Describe

Used to **idenitfy & separate** testing sections

```jsx
describe('Math Section', () => {
	test('Simple Sum', () => expect(2 + 4).toEqual(6));
})
```