import React, { Component } from 'react';

class WorldMessageCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errMessage: '',
    };
  }

  validateField = (value, callback) => {
    let errMessage = '';

    if (value === '0') {
      errMessage = 'O valor é muito baixo!';
    } else if (parseInt(value) > 7999) {
      errMessage = 'Nosso limite gratuito é de menos de 8000!';
    }
    errMessage === '' ? callback(false) : callback(true);
    this.setState({
      errMessage,
    });
  };

  changeIt = (e) => {
    this.props.onChangeCallback(e);
    this.validateField(e.target.value, this.props.onErrorCallback);
  };

  render() {
    const { value } = this.props;
    return (
      <fieldset>
        <label>Insira o nº de pessoas para envia-la: </label>
        <input type="number" id="worldMessageCount" onChange={this.changeIt} value={value} />
        <span>{this.state.errMessage}</span>
      </fieldset>
    );
  }
}

export default WorldMessageCount;
