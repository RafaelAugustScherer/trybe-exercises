import React, { Component } from 'react';

class Curriculum extends Component {
  onChange = ({ target: { value, id } }) => this.props.onChange({ value, id });

  render() {
    return (
      <div>
        <label htmlFor="curriculum">Resumo do currículo: </label>
        <textarea
          id="curriculum"
          onChange={this.onChange}
          value={this.props.value}
          maxLength="1000"
          required
        ></textarea>
      </div>
    );
  }
}

export default Curriculum;
