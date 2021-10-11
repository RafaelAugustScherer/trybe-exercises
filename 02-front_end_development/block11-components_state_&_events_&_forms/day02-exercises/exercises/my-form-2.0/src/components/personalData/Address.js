import React, { Component } from 'react';

class Address extends Component {

  // https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp
  onChange = ({ target: { value, id } }) => {
    value = value.replace(/[^a-zA-Z0-9]/g,'')

    this.props.onChange({ value, id });
  };

  render() {
    return (
      <div>
        <label htmlFor="address">Endereço: </label>
        <input
          type="text"
          id="address"
          maxLength="200"
          onChange={this.onChange}
          value={this.props.value}
          required
        />
      </div>
    );
  }
}

export default Address;
