import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      one: 0,
      two: 0,
      three: 0,
    }

    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(button) {
    console.log(this.state[button.className])
    button.style.backgroundColor = this.state[button.className] % 2 === 0 ? '#90ee90': 'rgb(239, 239, 239)'
  }

  async handleClick({ target }) {
    const buttonPosition = target.className;
    const logMessages = {
      one: "Hey, you clicked me :-)",
      two: "Thank you so much!! You're the best there ever was!",
      three: "Hahah, tricked ya!! I knew you would click me!",
    };
    console.log(logMessages[buttonPosition]);

    await this.setState(prevState => ({
      ...prevState,
      [buttonPosition]: prevState[buttonPosition] + 1,
    }));
    this.changeColor(target)
    console.log('Button actual color: ', target.style.backgroundColor);
  }

  render (){
    return (
      <div className="App">
        <button className='one' onClick={this.handleClick}>Click me!</button>
        <span>{this.state.one}</span>
        <button className='two' onClick={this.handleClick}>Nooo, CLICK ME!!</button>
        <span>{this.state.two}</span>
        <button className='three' onClick={this.handleClick}>Yeah, just click one of them</button>
        <span>{this.state.three}</span>
      </div>
    );
  }
}

export default App;
