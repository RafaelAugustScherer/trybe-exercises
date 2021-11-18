import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../redux/actions';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onInputChange = ({ target: { id, value } }) =>
    this.setState({ [id]: value })

  onSubmit = () => {
    const { email, password } = this.state;
    const { loginAction } = this.props;
    
    loginAction(email, password);
  }

  render() {
    const { onInputChange, onSubmit } = this;

    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email">
          Email
          <input type="text" id="email" name="email" onChange={ onInputChange } />
        </label>
        <label htmlFor="password">
          Password
          <input type="text" id="password" name="password" onChange={ onInputChange } />
        </label>
        <button type="button" onClick={ onSubmit }>
          <Link to="/clients">Login</Link>
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginAction: (user, password) => dispatch(login(user, password))
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  loginAction: PropTypes.func,
}.isRequired;