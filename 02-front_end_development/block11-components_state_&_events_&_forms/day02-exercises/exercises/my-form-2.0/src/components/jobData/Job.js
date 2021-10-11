import React, { Component } from 'react';

class Job extends Component {
  onMouseEnter = () => alert('Preencha com cuidado esta informação.');

  onChange = ({ target: { value, id } }) => this.props.onChange({ value, id });

  render() {
    return (
      <div>
        <label htmlFor="job">Cargo: </label>
        <input
          type="text"
          id="job"
          onChange={this.onChange}
          value={this.props.value}
          onMouseEnter={this.onMouseEnter}
          maxLength="40"
          required
        />
      </div>
    );
  }
}

export default Job;
