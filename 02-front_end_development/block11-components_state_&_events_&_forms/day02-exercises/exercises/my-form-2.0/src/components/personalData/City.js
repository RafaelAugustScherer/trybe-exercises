import React, { Component } from 'react';

class City extends Component {
  changeState = (value, id) => this.props.onChange({ value, id });

  onChange = ({ target: { value, id } }) => this.changeState(value, id);

  onBlur = ({ target: { id } }) => {
    if (!isNaN(Number(this.state.value[0]))) {
      this.changeState('', id);
    }
  };

  render() {
    return (
      <div>
        <label htmlFor="city">Cidade: </label>
        <input
          type="text"
          id="city"
          maxLength="28"
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={this.props.value}
          required
        />
      </div>
    );
  }
}

export default City;
