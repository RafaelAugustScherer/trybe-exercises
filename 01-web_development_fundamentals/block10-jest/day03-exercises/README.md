# Jest - Simulating Behaviors

## The Mocks

**Mocks** are used whenever you want to test a function's structural behavior, or doesn't want to depend on an external API to do your tests. Two examples are **API Promises** that might or might not be fulfilled, or **Complex Asynchronous Structures.**

---

The codes are used to **test** **the behavior of the code**. They will be a **representation** of what a real test scenario would be, but with **mocked values.**

Every code below needs to have the `jest` package installed through `npm`

---

### jest.fn()

Used to test **random return functions**. The function will be adapted to return a fixed value.

```jsx
let getRandomNumber = () => Math.floor(Math.random() * 100);

test('Testing getRandomNumber', () => {
	/* Will Fail */
	// expect(getRandomNumber()).toBe(10);

	/* Will Succeed */
	getRandomNumber = jest.fn().mockReturnValue(10);
	expect(getRandomNumber()).toBe(10);
	expect(getRandomNumber).toHaveBeenCalledTimes(1);
});
```

### jest.mock()

**jest.fn()** but can work with **many** functions

```jsx
// mathy.js
const getRandomNumber = () => Math.floor(Math.random() * 100);
const getNumberTimesTwo = (num) => num * 2

module.exports = { getRandomNumber, getNumberTimesTwo }

// random.test.js
const mathy = require('./mathy');
jest.mock('./mathy');

test('Testing getNumberTimesTwo', () => {
	/* Replace function content */
	mathy.getNumberTimesTwo.mockImplementation(() => 10 * 2);
	
	expect(mathy.getNumberTimesTwo()).toBe(20);
	expect(mathy.getNumberTimesTwo).toHaveBeenCalledTimes(1);
	expect(mathy.getNumberTimesTwo).toHaveBeenCalledWith();
});
```

### jest.spyOn()

Used especially for Promises. Compatible with **mockResolvedValue & mockRejectedValue**

```jsx
// mathy.js
const getRandomNumber = () => Math.floor(Math.random() * 100);
const getNumberTimesTwo = (num) => num * 2

module.exports = { getRandomNumber, getNumberTimesTwo }

// random.test.js
let mathy = require('./mathy');

test('Testing getNumberTimesTwo', () => {
	mathy = jest.spyOn(mathy, 'getNumberTimesTwo');
	mathy.getNumberTimesTwo.mockImplementation(() => 10 * 2);
	
	expect(mathy.getNumberTimesTwo()).toBe(20);
	expect(mathy.getNumberTimesTwo).toHaveBeenCalledTimes(1);
	expect(mathy.getNumberTimesTwo).toHaveBeenCalledWith();
});
```

### Common Functions

**mock.mockClear():** Clean 'data' between expects;

**mock.mockReset():** Remove estipulated returns or implementations

**mock.mockRestore():** Restore original implementation.

**mock.mockResolvedValue([value]):** Define a value for a resolved Promise

**mock.mockRejectedValue([value]):** Define a value for a rejected Promise