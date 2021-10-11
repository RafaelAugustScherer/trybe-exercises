import React, { Component } from 'react';

class WorldMessage extends Component {
  
  validateField(value) {
    let errMessage = '';
    
    if (value.length > 80) {
        errMessage = 'Sua mensagem é complexa demais para meros mortais!'    
    }

    return errMessage;
}
  
  render() {
    const { onChangeCallback, value } = this.props;
    const errMessage = this.validateField(value);

    return (
      <fieldset>
        <label>Digite sua mensagem ao mundo: </label>
        <input
          type="text"
          id="worldMessage"
          onChange={ onChangeCallback }
          value={ value }
        />
        <span>{ errMessage }</span>
      </fieldset>
    );
  }
}

export default WorldMessage;
