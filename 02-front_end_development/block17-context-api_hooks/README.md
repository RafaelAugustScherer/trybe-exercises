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

const { stateVar, setStateVar, stateVarTwo, ... } = useContext(MyContext);
```

## useEffect()

This is used in the place of componentDidMount, componentDidUpdate, componentWillUnmount, etc.

```jsx
// ComponentDidMount
useEffect(() => {
}, []);

// ComponentDidUpdate
useEffect(() => {
});

useEffect(() => {
}, [...extDependencies]);

// ComponentWillUnmount
useEffect(() => () => {
})
```

<aside>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEVKbqn///9Fa6dCaaa0xNv4+fuSp8g4YqNQcquxvtbl6fCWqcr19/qRp8tEaqdffrHS2uiitNIzXqGGnsTY3+s9ZaRohLWcrsxwjLhVdq3r7vTBy+CNocTG0eJ2j7tkgrR9l8Dg8VrWAAAC5UlEQVR4nO3c7ZKaMBSAYQhSQBREREXdxfu/yrrTztqpGCDVck7mff4zk3ei4cNIUAZ+S+ceAAAAAAAAAAAAnjDRXwpj5h7TqxRRk2yjrs7zw6G6ORzyL/WxDJJtkjTR3AP8J8ak7b7KTuFTp3PWzj1KZ0XUHi8fq+d1v+VKZ7EI9pfzcN7NWmVhUXxmuzF5WgubbrEc2aey0CS5ZW3xoDBqN/GEwPBazD3iicxl1Ppy96nr1G/SatIE3hxVzaFpFxP7wnCvaQ5Nep4cGJaaChuHQFWFSeUQGCq6Lm3WE1fRX/RMoSnHX8f8qZl74KOlH06BYTL3wMcyudNnVE+hKTdugeF27qGPlTsGaik05djbQbWFtWuglsLAcSENw5WOlcaUzlOopLDJfC9M3C5nvpxUFJrWOVDJHBbjVtJ4t3mwy1Q8iGqG7+zjTX793JcPOh03T8Nfw80xDQrTZ+6xj9MMPB+Nq0RJyROmG7itWKhYTSyK2l54SnXPYBBEtf0ZaabnNv6J6GIv3Kt65tsn+mEvVB84VHjyvvCsfZ0ZLFxQKB+FFMpHIYXyUUihfBRSKB+FFMpHIYXyUajraaJJHwUHe2HQc8ydsBk2ZdbDvlto2XfInbBd0NHaGuNC2P+eKHQg7D8zFFLYo5Z1unxD4dH7s0XnfWHrfaGsr+E7CoXtJqLQgbCd7K8vjL2fQ2l7hF9fKG2fN4XTnYVtXHx9obStma8vrCj8z95QKOsGmDmksK/Q+0+psMc0byiU9loM0y172P8UtOo75NvcRQ9M8mibW397yrY9x3ybO2gUfiGlUD4KKZSPQgrlo5BC+SikUD4KKZSPQgrlo5BC+SikUD4KKZSPQgrlo5BC+SikUD4KKZSPQgrlo9CDQvv+UgoVoJBC+SikUD4KKZSPQgrlo5BC+SikUD4KKZSPQgrlo5BC+fwvNNdTvHoqrvUXBoXt9SyJsJcIAQAAAAAAAAAgXjr3AN7tJx1KPz+uJ9skAAAAAElFTkSuQmCC" alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEVKbqn///9Fa6dCaaa0xNv4+fuSp8g4YqNQcquxvtbl6fCWqcr19/qRp8tEaqdffrHS2uiitNIzXqGGnsTY3+s9ZaRohLWcrsxwjLhVdq3r7vTBy+CNocTG0eJ2j7tkgrR9l8Dg8VrWAAAC5UlEQVR4nO3c7ZKaMBSAYQhSQBREREXdxfu/yrrTztqpGCDVck7mff4zk3ei4cNIUAZ+S+ceAAAAAAAAAAAAnjDRXwpj5h7TqxRRk2yjrs7zw6G6ORzyL/WxDJJtkjTR3AP8J8ak7b7KTuFTp3PWzj1KZ0XUHi8fq+d1v+VKZ7EI9pfzcN7NWmVhUXxmuzF5WgubbrEc2aey0CS5ZW3xoDBqN/GEwPBazD3iicxl1Ppy96nr1G/SatIE3hxVzaFpFxP7wnCvaQ5Nep4cGJaaChuHQFWFSeUQGCq6Lm3WE1fRX/RMoSnHX8f8qZl74KOlH06BYTL3wMcyudNnVE+hKTdugeF27qGPlTsGaik05djbQbWFtWuglsLAcSENw5WOlcaUzlOopLDJfC9M3C5nvpxUFJrWOVDJHBbjVtJ4t3mwy1Q8iGqG7+zjTX793JcPOh03T8Nfw80xDQrTZ+6xj9MMPB+Nq0RJyROmG7itWKhYTSyK2l54SnXPYBBEtf0ZaabnNv6J6GIv3Kt65tsn+mEvVB84VHjyvvCsfZ0ZLFxQKB+FFMpHIYXyUUihfBRSKB+FFMpHIYXyUajraaJJHwUHe2HQc8ydsBk2ZdbDvlto2XfInbBd0NHaGuNC2P+eKHQg7D8zFFLYo5Z1unxD4dH7s0XnfWHrfaGsr+E7CoXtJqLQgbCd7K8vjL2fQ2l7hF9fKG2fN4XTnYVtXHx9obStma8vrCj8z95QKOsGmDmksK/Q+0+psMc0byiU9loM0y172P8UtOo75NvcRQ9M8mibW397yrY9x3ybO2gUfiGlUD4KKZSPQgrlo5BC+SikUD4KKZSPQgrlo5BC+SikUD4KKZSPQgrlo5BC+SikUD4KKZSPQgrlo9CDQvv+UgoVoJBC+SikUD4KKZSPQgrlo5BC+SikUD4KKZSPQgrlo5BC+fwvNNdTvHoqrvUXBoXt9SyJsJcIAQAAAAAAAAAgXjr3AN7tJx1KPz+uJ9skAAAAAElFTkSuQmCC" width="40px" /> Here is the complete list of Hooks from the [Facebook Docs.](https://reactjs.org/docs/hooks-reference.html)

</aside>

### Custom Hooks

Those are used to separate and make Hooks reusable between Components. Literally any useState, useContext, useEffect can be used and exported to the Components.

```jsx
function **use**CustomHook(defaultValue) {
  const [variable, setVariable] = useState(defaultValue);
	
	// Manipulate variable, useEffect the variable, etc..

  return { variable, setVariable };
}
```

As a convention, every **Custom Hook should start as use[**CustomHookName].