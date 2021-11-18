# Block 15 - Redux

Made to simplify the Components **callback chain** (in **React**)! Centralize functions and callbacks, all in one place. Redux.

# Redux Trinity

## Actions

**Functions** that comunicate directly with the client. Receives client | user information and send it to the **Reducer**. Basically a callback function.

## Store

Store is where all the application's info is stored. It is directly connected to the reducers and the application itself.

## Reducers

Reducers use actions to manipulate itself and the store information.

# Initializing Redux in React

```jsx
npm install redux react-redux

// Optional for Redux Dev Tools Integration
npm install --save redux-devtools-extension
```

## Creating the Store

```jsx
/* store/index.js */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
```

## Creating the Reducers

```jsx
/* reducer/index.js */
import { combineReducers } from 'redux';
import reducerSample1from './reducerSample1';
import reducerSample2 from  './reducerSample2';

const rootReducer = combineReducers({ reducerSample1, reducerSample2 });

export default rootReducer;

/* reducer/reducerSample1.js */
import { ACTION_ONE, ACTION_TWO } from '../action';

const INITIAL_STATE = {
	****prop1: true,
	prop2: false,
};

const reducerSample1 = (state = INITIAL_STATE, action) => {
	switch(action.type):
		case ACTION_ONE:
			return { ...state, prop1: !prop1 }
		case ACTION_TWO:
			return { ...state, prop2: !prop2 }
		default:
			return state;
}

export default reducerSample1;
```

## Creating the Actions

```jsx
/* action/index.js */
export const ACTION_ONE = 'ACTION_ONE';
export const ACTION_TWO = 'ACTION_ONE';

// actionCreator
export const actionOne = (param1, ...paramX) => {
	type: ACTION_ONE,
	param1,
	paramX,
};
...otherActions
```

## Index

```jsx
/* index.js */
import ReactDOM from 'react-dom';
import store from './store';

ReactDOM.render(
	<Provider store={ store }>
		<App />
	<Provider />,
	document.getElementById('root');
);
```

## App

```jsx
import { connect } from 'react-redux';
import { actionName, otherAction } from '../action';

class App extends Component {
	render(){
	const { prop1, propX } =  this.props;
	const { actionOne, actionTwo } = this.props;
	return (
			<div>
				<span>Hello World!</span>
			</div>
	);
	}
}

// State from Reducer will be stored in this.props. This can be retrieved from store.getStore() as well
const mapStateToProps = ({ reducer: { prop1, ...propX } }) => ({ prop1, propX }); 

// Actions that will be used within the Component
const mapDispatchToProps = (dispatch) => ({
  actionOne: (params) => dispatch(actionOne(params)),
  actionTwo: (params) => dispatch(actionTwo(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(null, null)(App) - If the component does not use state or dispat
```

---

<aside>
📜 **React Redux Summary**

**Store** ⇒ Head element, stores everything, manipulate everything;
**Reducer** ⇒ Store a set of the global state, manipulate it;
**Action** ⇒ Manipulate the reducer;
**Dispatch** ⇒ Activate the action.

</aside>

# React-thunk - Async Actions

Handling async functions is relatively simple with react-thunk.

```jsx
npm install redux-thunk
```

## Fetch Dog Image Example

```jsx
/* actions/index.js */
export const SAVE_IMAGE = 'SAVE_IMAGE';
export const START_REQUEST = 'START_REQUEST';
export const FAILED_REQUEST = 'FAILED_REQUEST';

startRequest = () => ({
  type: START_REQUEST,
});

saveImage = (json) => ({
	type: SAVE_IMAGE, 
	payload: json.message,
});

failedRequest = (error) => ({
  type: FAILED_REQUEST,
	payload: error,
});

export const fetchDog = () => (
  async (dispatch) => {
    dispatch(startRequest());
    const r = await fetch('https://dog.ceo/api/breeds/image/random');
    return await r.json()
      .then(
        (json) => dispatch(saveImage(json)),
        (error) => dispatch(failedRequest(error)));
  };
);

/* reducer/index.js */
import { SAVE_IMAGE, START_REQUEST, FAILED_REQUEST } from '../actions'

const initialState = {
  isFetching: false,
  imagePath: '',
  error: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_REQUEST:
      return { ...state, isFetching: true };
    case SAVE_IMAGE:
      return { ...state, imagePath: action.payload, isFetching: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}

/* store/index.js */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
```

Calling `fetchDog()` from a React **Component** would save the Dog Image in the Redux state,