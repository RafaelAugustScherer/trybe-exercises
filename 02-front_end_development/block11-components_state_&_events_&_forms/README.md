# Block 11: Components With State, Events & React Forms

## This

`this`, inside a React Component, is the Component itself. Example:

```jsx
import React, {Component} from 'react';

class main extends Component {

	render() {
		console.log(this); // class main itself as an object
		return (<h1>Hey, I'm a title!</h1>);
	}
}
```

`this` is an object that contains every Component property such as `state` properties & its `props`.

## State

`state` is a place to store variables that might be used in the Component `render()` and will be initialized by the `constructor()`;

**Always** set the state values with `setState()` outside of the `constructor()`, since they are managed **asynchronously** by React. **Do not use this.state** in any other circumstance.

## Constructor

`constructor()` is the thing that is executed whenever a React Component is created, and it will be used to `bind` functions to the Component's `class` and initialize `state` variables.

```jsx
import React, {Component} from 'react';

class main extends Component {
	constructor() {
		super(); // Idk, super function, y3ah...

		this.setState({
			titleValue = "Hey, I'm a title!" // Anything associated to the component can be saved here
		});
		this.handleClick = this.handleClick.bind(this) // 'this' in handleClick() is now the class main
	}
	
	handleClick (e) { 
		e.target.innerText = "No You'r not!"
	}

	render() {
		return (<h1 onClick={(e) => handleClick(e) }>Hey, I'm a title!</h1>);
	}
}
```

### State vs Props

`props` are given from 'father' Component to 'child' Component; Must not be changed;

`state` is used within the Component; Can be changed for dynamic behaviors;

## Forms in React

### onChange

- Every **controlled** `<input>` element will be **handled** by a function that is called whenever the **onChange** of the HTML element is **triggered;**
- The values will be saved in the **Component's** **state**, as **plain text** for **conventional inputs** or `boolean` for **checkboxes;**

> See the example below:
> 

```jsx
import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      text: '', // Default value
			checkbox: false, // Unchecked
    };
  }

  handleChange = ({ target: { id, value, type, checked } }) => {
    if (type === 'checkbox') value = checked;
    this.setState({
      [id]: value,
    });
  };

  render() {
    return (
      <form>
        <fieldset>
          <label>Text Input: </label>
          <input
            type="text"
            id="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </fieldset>

        <fieldset>
          <label>Checkbox Input: </label>
          <input
            type="checkbox"
            id="checkbox"
            onChange={this.handleChange}
            value={this.state.checkbox}
          />
        </fieldset>
      </form>
    );
  }
}

export default Form;
```

### Callbacks in Forms

In the case of each `<input>` element being a **separate React Component**, child of the `<form>`, you can 'share' callback functions through **props** between parent and child elements.

This way the child can **call the callback function** and change the value in the **Parent's state,**