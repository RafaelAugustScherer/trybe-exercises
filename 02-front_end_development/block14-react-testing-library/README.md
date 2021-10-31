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