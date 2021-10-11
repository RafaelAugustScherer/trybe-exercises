import React, { Component } from 'react';
import states from '../../assets/data';

class State extends Component {
  onChange = ({ target: { value, id } }) => this.props.onChange({ value, id });

  render() {
    return (
      <div>
        <label htmlFor="state">Estado: </label>
        <select id="state" onChange={this.onChange}>
          {states.map((state, idx) => (
            <option key={idx} >{state}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default State;
