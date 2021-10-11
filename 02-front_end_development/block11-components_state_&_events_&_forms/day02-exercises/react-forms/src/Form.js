import React, { Component } from 'react';
import WorldMessage from './components/WorldMessage';
import WorldMessageCount from './components/WorldMessageCount';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      favLanguage: 'React',
      worldMessage: '',
      worldMessageCount: '',
      devMessage: '',
      sendToFriends: false,
      formularioComErros: false,
    };
  }

  handleChange = ({ target: { id, value, type, checked } }) => {
    if (type === 'checkbox') value = checked;
    this.setState({
      [id]: value,
    });
  };

  handleError = (bool) => {
    this.setState({
        formularioComErros: bool,
    })
  }

  render() {
    return (
      <form>
        <fieldset>
          <label>Selecione sua linguagem / biblioteca favorita: </label>
          <select id="favLanguage" onChange={this.handleChange}>
            <option>React</option>
            <option>JavaScript ES6</option>
            <option>Python</option>
            <option>C++</option>
          </select>
        </fieldset>

        <WorldMessage onChangeCallback={this.handleChange} value={this.state.worldMessage} onErrorCallback={this.handleError} />
        <WorldMessageCount onChangeCallback={this.handleChange} value={this.state.worldMessageCount} onErrorCallback={this.handleError} />

        <fieldset>
          <label>Inclua sua mensagem ao desenvolvedor (opcional): </label>
          <textarea
            id="devMessage"
            onChange={this.handleChange}
            value={this.state.devMessage}
          ></textarea>
        </fieldset>

        <fieldset>
          <label>Quer enviar também para seus amigos? </label>
          <input
            type="checkbox"
            id="sendToFriends"
            onChange={this.handleChange}
            value={this.state.sendToFriends}
          />
        </fieldset>

        <fieldset>
          <label>Insira o seu certificado: </label>
          <input type="file" id="certificateFile" />
        </fieldset>
      </form>
    );
  }
}

export default Form;
