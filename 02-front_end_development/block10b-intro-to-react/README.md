# Block 11: Introduction to React

## npm

**Node Package Module** is a Node.js package manager, that is used for creating Node projects and also adding Node packages and libraries.

### npm init

Used to create a Node Project in the current folder. You can specify the name, description, etc.. or just add the **`-y`** flag for default values.

```bash
npm init # Prompts for custom options
npm init -y # Start the project with default options
```

### npm install

Used to **install** **libraries** in the current project. Can be used as `npm i`, and with the flag **`—save-dev`** to tell the Package manager that this is **only for development**, and does not need to be included in public releases.

```bash
npm install [libraryName] # Install library to the project
npm i [libraryName] # Shorthand to npm install

npm i [libraryName] --save-dev # Only for development
```

## React

### Setup

Use this instead of `npm init` to create a React **Template Project**

```bash
# Create Base Node Project/App
npx create-react-app [appName]
```

### Syntax - JSX

We will be using JSX (Javascript Syntax Extension) as our default syntax extension. It uses a very similar structuring system to HTML's.

### JSX vs Native React

```jsx
// Native
let element = React.createElement("h1", null, "Hello, world")

// JSX 
element = <h1>Hello, world!</h1>;
```

#### Elements & Props

```jsx
const createHello = (name) => `Hello, ${name}!`;

const textElement = <p>{createHello('George')}</p>;

const containerClass = 'hello-container';
const container = <div className = {containerClass}>{textElement}</div>
```

### Render

Render every DOM Element in the client screen.

Obs: By **standard** every React Element is rendered within a `<div id='root'></div>` in the HTML page. 

```jsx
const textElement = <p>{createHello('George')}</p>;

// Render page with the textElement
ReactDOM.render(element, document.getElementById('root'));
```

### CSS

```css
/* App.css */
.redBg {
	background-color: red;
}
```

```jsx
/* App.js */
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='redBg'>
      <h1>APP</h1>
    </div>
  );
};

export default App;
```

## React - Real Life

### Rendering - Real Life

```jsx
/* App.js */
function App() {
  return (
    <div className='example'>
		  <h1>APP</h1>
		</div>
  );
}
export default App;

/* index.js */
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

### Class vs Function

Both work basically the same way.

```jsx
/* App.js */
import React from 'react'

function App () {
	return (
	<div className='example'>
	  <h1>APP</h1>
  </div>
	);
}

class App extends React.Component {
	render() {
		return (
			<div className='example'>
	      <h1>APP</h1>
	    </div>
		)
	}
}
export default App;
```

### props

Props can be interpreted as **parameters** sent to the **React Component.**

```jsx
/* Greeting.js */
import { Component } from 'react';

/* Function */
const Greeting = ({ name }) => <h1>Hello, {name}</h1>

/* Class */
class Greeting extends Component {
   render() {
     return (<h1>Hello, {this.props.name}</h1>);
   }
 }

export default Greeting;
```

```jsx
/* App.js */
import Greeting from './Greeting';

const App = () =>
	<main>
	  <Greeting name="Jhonny">
  </main>

export default App;
```

#### propTypes

Specify parameter types and requirement options.

```jsx
import React from 'react';
**import PropTypes from 'prop-types';**

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>);
  }
}

**Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string,
	age: PropTypes.number,
};**

export default Greeting;
```

**propTypes types**

- String: PropTypes.string;
- Number: PropTypes.number;
- Boolean: PropTypes.bool;
- Function: PropTypes.func;
- Object: PropTypes.object;
- Array: PropTypes.array;
- ArrayOf: PropTypes.arrayOf(PropTypes.string);
- ObjectOf: ....