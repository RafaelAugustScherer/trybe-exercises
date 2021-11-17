import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import states from '../data/states';
import { changeField, CHANGE_FIELD_PERSONAL } from '../redux/actions/action';

class PersonalForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: 'Rio de Janeiro',
      isRedirected: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange({ target: { value, id } }) {
    this.setState({
      [id]: value,
    });
  }

  onSubmit() {
    const { changeFieldAction } = this.props;

    const formData = this.state;
    const formDataArray = Object.entries(formData);
    formDataArray.pop();

    formDataArray.forEach(([field, value]) => {
      changeFieldAction(field, value);
    });
    this.setState({ isRedirected: true });
  }

  render() {
    const { onInputChange, onSubmit } = this;
    const { name, email, cpf, address, city, state, isRedirected } = this.state;

    if (isRedirected) return <Redirect to="/professionalForm" />;
    return (
      <div>
        <h1>Personal Form</h1>
        <form>
          <fieldset>
            <label htmlFor="name">
              Nome
              <input
                type="text"
                name="name"
                id="name"
                onChange={ onInputChange }
                value={ name }
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
                id="email"
                onChange={ onInputChange }
                value={ email }
              />
            </label>
            <label htmlFor="cpf">
              CPF
              <input
                type="text"
                name="cpf"
                id="cpf"
                onChange={ onInputChange }
                value={ cpf }
              />
            </label>
            <label htmlFor="address">
              Endereço
              <input
                type="text"
                name="address"
                id="address"
                onChange={ onInputChange }
                value={ address }
              />
            </label>
            <label htmlFor="city">
              Cidade
              <input
                type="text"
                name="city"
                id="city"
                onChange={ onInputChange }
                value={ city }
              />
            </label>
            <label htmlFor="state">
              Estado
              <select id="state" onChange={ onInputChange } value={ state }>
                {states.map((stateName) => (
                  <option key={ stateName } name={ stateName }>
                    {stateName}
                  </option>
                ))}
              </select>
            </label>
            <button type="button" onClick={ onSubmit }>
              Enviar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeFieldAction:
    (field, value) => dispatch(changeField(CHANGE_FIELD_PERSONAL, field, value)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);

PersonalForm.propTypes = {
  changeFieldAction: PropTypes.func.isRequired,
};
