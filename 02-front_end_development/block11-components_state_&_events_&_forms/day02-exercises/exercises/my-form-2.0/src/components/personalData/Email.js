import React, { Component } from 'react';

class Email extends Component {
  testRegex = (value) =>
    RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim).test(value) ? value : '';

  onChange = ({ target: { value, id } }) => this.props.onChange({ value, id });

  onBlur = ({ target: { value, id } }) => {
    value = this.testRegex(value);
    this.props.onChange({ value, id });
  };

  render() {
    return (
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          maxLength="50"
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={this.props.value}
          required
        />
      </div>
    );
  }
}

export default Email;
