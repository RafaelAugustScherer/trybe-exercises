import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    const { completeCurriculum } = this.props;
    return (
      <div>
        <h1>Form Data Display</h1>
        {
          Object.values(completeCurriculum).map((formData) => (
            Object.entries(formData).map(([field, value]) => (
              <div key={ field }>
                <p>
                  <strong>{ field }</strong>
                  <span>{ value }</span>
                </p>
              </div>
            ))
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  completeCurriculum: state,
});

export default connect(mapStateToProps)(FormDataDisplay);

FormDataDisplay.propTypes = {
  completeCurriculum: PropTypes.objectOf(PropTypes.object),
}.isRequired;
