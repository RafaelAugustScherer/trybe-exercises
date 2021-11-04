# Block 14 - React Testing Library

This is **React's recommended testing library**, and comes installed as default in the **React Example App**. It is quite simple to use and does share some of the JEST syntax.

## **React's Example App: /src/App.test.js**

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

# Syntax

## Starting the Test Enviroment

```jsx
/* App.test.js */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Example App Test', () => {
	render(<App />);
	// TESTS HERE *
})
```

## Testing Stuff

```jsx
test('Test if name input exists', () => {
	render(<App />);
	const nameInput = screen.getByLabelText('Name');

	expect(nameInput).toBeInTheDocument();
	expect(nameInput.type).toBe('text');	
})
```

---

All of the syntax is **pretty straight forward.** If anything, do not hesitate to consult the [API](https://testing-library.com/docs/dom-testing-library/cheatsheet/) or search for any topic in particular.

## More Syntax!!

### Anything

**`screen.getbyText( [regex] || /[string]/i ) // /i === !caseSensitive`;**

**`screen.getbyTestId( [string] ) // element.data-testid === [string]`;**

`expect( [screenElement] ).toBeInTheDocument()`;

`expect( [screenElements] ).toHaveLength( [number] )`;

### Input

**`screen.getByRole('button') //type button && only 1`;**

**`screen.getAllByRole('button') //type button && all`;**

`expect( [screenElement] ).toHaveProperty('type', 'text') || expect(it.type).toBe('text')`;

`expect( [buttonElement] ).toHaveValue()`

# userEvent

`npm install --save-dev @testing-library/user-event`

Simulate user events!

## Example

```jsx
/* App.test.js */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Example App Test', () => {
	render(<App />);
	const buttonElement = screen.getElementByTestId('send-button');
	userEvent.click(buttonElement);

	const welcomeMessage = screen.getElementbyTestId('welcome-message');
	expect(welcomeMessage).toHaveText('Hello World!');
})
```

# Function Mocks (fn)

To **Mock** a function is to simulate its behavior in a controlled ambient, with **static variables**. These can be used to easily simulate an API call. In this example, we will be using random numbers:

```jsx
const generateRandomNumber = () => Math.random() * 100;
const sumTwoNumbers = () => generateRandomNumber() + generateRandomNumber();

describe('Test sumTwoNumbers behavior') {
	test('Test function call', () => {
		sumTwoNumbers = jest.fn(); // Function is mocked
		sumTwoNumbers();
	
		expect(sumTwoNumbers).toHaveBeenCalled()
	});
	test('Test function results', () => {
		generateRandomNumber = jest.fn().mockReturnValue(4);
		expect(sumTwoNumbers()).toBe(8) // Test function result
	});
}
```

> This is a simple example, mocking only random numbers. But the **same solution** can be applied to **complex functions** that are responsible for **API data treatment**.
> 

## Mocking the Entire function (mockImplementation)

You can also mock the entire function and manipulate not only the return value, but its entire behavior.

```jsx
test('sumTwoNumbers ', () => {
	sumTwoNumbers.mockImplementation((a, b) => a + b);
	expect(sumTwoNumbers(1, 2)).toBe(3);
})
```

## Making the Mock into a Promise (spyOn)

This way, we are using the original implementation, and just "spying" on the results

```jsx
test('sumTwoNumbers ', () => {
	const mockSumTwoNumbers = jest.spyOn(sumTwoNumbers);
	mockSumTwoNumbers(1, 2);

	expect(mockSumTwoNumbers).toHaveBeenCalled();
	expect(mockSumTwoNumbers(1, 2)).resolves.toBe(3);
})
```

## Clear Implementations Between Tests

```jsx
// mock.mockClear() => Between expects
// mock.mockReset() => Between tests
// mock.mockRestore() => Restore to original

afterEach(() => {
	sumTwoNumbers.mockReset();
	generateRandomNumber.mockReset();
})
```

## Mocking Fetch

```jsx
global.fetch = jest.fn().mockResolvedValue({
	json: jest.fn().mockResolvedValue(mockedAPIResponse)
});

global.fetch = async () => { json: async () => {mockedAPIResponse} };
```

## Variants

`mockImplementationOnce()` ⇒ Same as mockImplementation, but only applied in the next call;

`mockReturnValueOnce()` ⇒ Same as mockReturnValue, but only applied in the next call;

`toHaveBeenCalledTimes([number])` ⇒ Same as toHaveBeenCalled but specifying how many times;