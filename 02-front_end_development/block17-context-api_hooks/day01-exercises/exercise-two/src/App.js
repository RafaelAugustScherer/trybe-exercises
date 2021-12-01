import React, { Component } from 'react';
import { createContext } from 'react';
import './App.css';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';

export const MyContext = createContext(0);

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
      signalColor: 'red',
    }
  }

  moveCar = (car) => {
    const { cars } = this.state;
    this.setState({ cars: {...cars, [car]: !cars[car]} });
  }

  changeSignal = (color) => this.setState({ signalColor: color });

  render() {
    const { state, moveCar, changeSignal } = this;
    return (
      <MyContext.Provider value={ { ...state, moveCar, changeSignal } }>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
