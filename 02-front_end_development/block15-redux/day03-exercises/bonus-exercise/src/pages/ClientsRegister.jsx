import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { regClient } from '../redux/actions';

class ClientsRegister extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  resetState = () => 
  this.setState({
    name: '',
    age: '',
    email: '',
  });

  onInputChange = ({ target: { id, value } }) =>
    this.setState({[id]: value})
  
  onSubmit = (e) => {
    e.preventDefault();
    const formData = Object.values(this.state);
    const { regClientAction } = this.props;

    regClientAction(...formData);
    this.resetState();
  }
  render() {
    const { name, age, email } = this.state;
    const { onInputChange, onSubmit } = this;

    return (
      <form>
        <label htmlFor="name">
          Nome
        <input type="text" id="name" name="name" value={ name } onChange={ onInputChange } />
        </label>
        <label htmlFor="age">
          Idade
        <input type="number" id="age" name="age" value={ age } onChange={ onInputChange } />
        </label>
        <label htmlFor="email">
          Email
        <input type="email" id="email" name="email" value={ email } onChange={ onInputChange } />
        </label>
        <button onClick={ onSubmit }>Cadastrar</button>
        <button><Link to="/clients">Voltar</Link></button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  regClientAction: (name, age, email) => dispatch(regClient(name, age, email))
})

export default connect(null, mapDispatchToProps)(ClientsRegister)