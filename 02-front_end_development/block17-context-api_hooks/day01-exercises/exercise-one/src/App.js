import React, { Component } from 'react';
import { createContext } from 'react';
import './App.css';
import Cars from './Cars';

export const MyContext = createContext(0);

class App extends Component {
  constructor() {
    super();
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
  }

  moveCar = (car) => {
    const cars = this.state;
    this.setState({ [car]: !cars[car] });
  }

  render() {
    const { state, moveCar } = this;
    return (
      <MyContext.Provider value={ { ...state, moveCar } }>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
