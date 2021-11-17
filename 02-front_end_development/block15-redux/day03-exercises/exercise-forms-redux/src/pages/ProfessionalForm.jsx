import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeField, CHANGE_FIELD_PROFESSIONAL } from '../redux/actions/action';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculum: '',
      job: '',
      jobDescription: '',
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
    const { curriculum, job, jobDescription, isRedirected } = this.state;

    if (isRedirected) return <Redirect to="/formDisplay" />;
    return (
      <div>
        <h1>Professional Form</h1>
        <form>
          <fieldset>
            <label htmlFor="curriculum">
              Resumo do Currículo
              <textarea
                name="curriculum"
                id="curriculum"
                onChange={ onInputChange }
                value={ curriculum }
              />
            </label>
            <label htmlFor="job">
              Cargo
              <input
                type="text"
                name="job"
                id="job"
                onChange={ onInputChange }
                value={ job }
              />
            </label>
            <label htmlFor="jobDescription">
              Descrição do Cargo
              <textarea
                type="text"
                name="jobDescription"
                id="jobDescription"
                onChange={ onInputChange }
                value={ jobDescription }
              />
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
    (field, value) => dispatch(changeField(CHANGE_FIELD_PROFESSIONAL, field, value)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);

ProfessionalForm.propTypes = {
  changeFieldAction: PropTypes.func.isRequired,
};
