import React, { Component } from 'react';

class JobDescription extends Component {
  onMouseEnter = () => alert('Preencha com cuidado esta informação.');

  onChange = ({ target: { value, id } }) => this.props.onChange({ value, id });

  render() {
    return (
      <div>
        <label htmlFor="jobDescription">Descrição do Cargo: </label>
        <textarea
          id="jobDescription"
          onChange={this.onChange}
          value={this.props.value}
          maxLength="500"
          required
        ></textarea>
      </div>
    );
  }
}

export default JobDescription;
