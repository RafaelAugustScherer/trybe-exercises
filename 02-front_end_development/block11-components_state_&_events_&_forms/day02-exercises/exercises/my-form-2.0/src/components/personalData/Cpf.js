import React, { Component } from 'react';

class Cpf extends Component {
  // https://stackoverflow.com/questions/51770246/how-to-validate-numeric-inputs-in-reactjs
  onChange = ({ target: { value, id, maxLength } }) => {
    if (value.length > maxLength) value = String(value).slice(0, -1);

    this.props.onChange({ value, id });
  };

  render() {
    return (
      <div>
        <label htmlFor="cpf">CPF: </label>
        <input
          type="number"
          id="cpf"
          maxLength="11"
          onChange={this.onChange}
          value={this.props.value}
          required
        />
      </div>
    );
  }
}

export default Cpf;
