# Block 17 - Context & Hooks

These **tools/methods** were made with the purpose of creating a **simplified** version of **Redux**, with much less written code. 

# Context API

## Structure

The Context structure works as following:

1. Create the Context with `const MyContext = createContext([defaultValue])`;
2. Create the Structure of the Context Provider (**Parent**): 

```jsx
<MyContext.Provider value={ /* Context Value, can be updated */ }>
	<ChildOne>
	...
</MyContext.Provider>
```

1. Create the Structure of the Context Consumer (**Child**):

```jsx
<MyContext.Consumer>
	({ contextValue, anotherValue, ... }) => (
		/* Use the values as props */
	)
</MyContext.Consumer>

```

## Pros and Cons

- ✅ Pros
    - No need for Actions, Reducers or Store;
    - No need for `mapStateToProps`, `mapDispatchToProps` & `connect`;
    - No more `props` validation.
- ❌ Cons
    - `props` won't be validated;
    - The "Application State" is now being managed with the Components;

## Complete Example

```jsx
/* App.jsx */
import React, { Component, createContext } from 'react';

export const MyContext = createContext(0);

class App extends Component {
  constructor() {
    ...
 }
}

sampleFn = () => {
  this.setState(...);
}

render() {
  const { state, sampleFn } = this;
  return (
    <MyContext.Provider value={ { ...state, sampleFn } }>
      <Child />
    </MyContext.Provider>
  );
 }
}
export default App;

/* Child.jsx */
import React from 'react';
import { MyContext } from './App';

function Child() {
  return (
    <MyContext.Consumer>
			({ state, sampleFn }) => (
	      <div>
					{ /* Manipulate Variables received from parent */ }
				</div>
			)
		</MyContext.Consumer>
  );
}
export default Child;
```

# Hooks

## useState()

This is used to create variables for the Component, such as following:

```jsx
const [counter, setCounter] = useState(0);
// let counter = 0;

setCounter(counter + 1);
// counter = 1;
```

## useContext()

This is used to retrieve variables from an external Context.

```jsx
import MyContext from '../context/MyContext.js';

const { stateVar, setStateVar } = useContext(MyContext);
```