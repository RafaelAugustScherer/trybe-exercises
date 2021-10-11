import { Component } from 'react';

class SubmitData extends Component {
  render() {
    return (
      <div>
        {Object.entries(this.props.data).map((field) => (
          <p key={field[0]}>
            {field[0]}: {field[1]}
          </p>
        ))}
      </div>
    );
  }
}

export default SubmitData;
