import React, { Component } from 'react';

class Type extends Component {
  onChange = ({ target: { value, id } }) => this.props.onChange({ value, id });

  render() {
    return (
      <div>
        <input type="radio" id="type" name="type" value="Casa" onChange={this.onChange} checked={this.props.value === 'Casa'} required />
        <label htmlFor="Casa">Casa</label>
        <input type="radio" id="type" name="type" value="Apartamento" onChange={this.onChange} checked={this.props.value === 'Apartamento'} required />
        <label htmlFor="Apartamento">Apartamento</label>
      </div>
    );
  }
}

export default Type;
