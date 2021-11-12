import { createStore } from 'redux';
import { CHANGE_SIGNAL, MOVE_CAR } from './actionCreators';

const INITIAL_STORE = {
  cars: {
    redCar: false,
    blueCar: false,
    yellowCar: false,
  },
  trafficSignal: 'red',
};

const reducer = (state = INITIAL_STORE, action) => {
  switch(action.type) {
    case CHANGE_SIGNAL:
      return { ...state, trafficSignal: action.payload }
    case MOVE_CAR:
      return { ...state, cars: { ...state.cars, [action.car]: action.side } }
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
