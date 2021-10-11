import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import SubmitData from './SubmitData';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isSubmit: false,
      data: {},
    }
  }

  setData = (data, isSubmit) => {
    this.setState({
      isSubmit,
      data,
    })
  }
  
  render() {
    return (
      <div className="App">
        <Form setData={this.setData} />
        { this.state.isSubmit ? <SubmitData data={this.state.data}/> : null }
      </div>
    );
  }
}

export default App;
