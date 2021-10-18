# Block 12: Components Life Cycle & React Router

Components Life Cycle are divided in 3 parts: **Mount, Update & Unmount.**

# Part 1 - Components Life Cycle

## Mount

1. constructor `// Executed during Component initialization, which is done even before mounting proccess`
2. render
3. **componentDidMount**

## Update

1. **shouldComponentUpdate**
2. render
3. **componentDidUpdate**

## **Unmount**

1. **componentWillUnmount**

> Reference: [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
> 

## Why?

Using **setState** inside the **render( )** method can be confusing for React because it is **executed** every time the **state is updated**, creating an **infinite loop**.

These functions are a **neat** form to prevent that.

# Part 2 - React Router

> `npm install react-router-dom`
> 

## `props.children`

```jsx
/* App.js */
class App extends Component {
  render() {
    return (
      <>
        <AComponent>
          <p>Doomed Doomy Dummy</p>
        </AComponent>
      </>
    )
  }
}

/* AComponent.js */
class AComponent extends Component {
  render() {
    return (
      <>
        <div>
          { props.children } /* <p>Doomed Doomy Dummy</p> */
        </div>
      </>
    )
  }
}
```

## BrowserRouter + Route

BrowserRouter is used to create **paths** that are used  as **Routes** between application **Components**.

```jsx
/* App.js */
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/home"><Home /></Route> /* localhost:3000/home */
				<Route path="/profile" component={Profile} /> /* localhost:3000/profile */
				<Route **exact** path="/about" component={About} /> /* localhost:3000/about */
      <BrowserRouter />
    )
  }
}
```

### <Route path="/home" /> VS <Route exact path="/home" />

The **exact** specifies that the URL is **Strictly Equal To**. If you don't use it, any **substring** of **'/home'** **('/'** for once) will be **rendered** in the screen as well.

## Link

The Link is a very simple way to literally link pages! (This is assuming the **BrowserRouter** has **already** **been done** in **App.js**)

```jsx
/* Home.js */
import { Link } from 'react-router-dom';
import Profile from './components/Profile';

class Home extends Component {
  render() {
    return (
      <div>
				<Link to="/profile">Profile Page</Link>
			</div>
    )
  }
}
```

## Route Params

To work with parameters Routes need to use the **render( )** method. Route params can be given in the path URL as well.

```jsx
/* App.js */
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
				<Route
					**exact** path="/about/:id" //localhost:3000/about/1234
					render={(props) => <About {...props} otherProp={ //insertPropHere } />}
					component={About}
				/> /* localhost:3000/about */
      <BrowserRouter />
    )
  }
}
// localhost:3000/about/1234
// (const { id } = this.props.match.params) === 1234
```

## Switch

The <Switch> prevents more that more than one <Route /> is rendered at the same time, removing the need of **exact path** in a number of cases.

```jsx
<BrowserRouter>
	<Switch>
		<Route path="/home"><Home /></Route> /* localhost:3000/home */
		<Route path="/profile" component={Profile} /> /* localhost:3000/profile */
		<Route path="/about" component={About} /> /* localhost:3000/about */
	<Switch />
<BrowserRouter />
```

## Redirect

Very straight forward. **Conditional ⇒ Redirect**

```jsx
<BrowserRouter>
	<Switch>
		<Route path="/dashboard" component={Dashboard} />
	  <Route exact path="/">
	  {loggedIn ? <Redirect to="/dashboard" /> : <Login />}
	  </Route>
	</Switch>
<BrowserRouter />
```

---

**404 Page Error!**
Using `<Switch />`, you can place the last Route as `<Route path="*" component={ 404Error } />`.