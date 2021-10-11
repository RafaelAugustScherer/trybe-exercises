import React, { Component } from 'react';

class Name extends Component {
  onChange = ({ target: { value, id } }) => {
    value = value.toUpperCase();
    this.props.onChange({ value, id });
  };

  render() {
    return (
      <div>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          id="name"
          maxLength="40"
          onChange={this.onChange}
          value={this.props.value}
          required
        />
      </div>
    );
  }
}

export default Name;
