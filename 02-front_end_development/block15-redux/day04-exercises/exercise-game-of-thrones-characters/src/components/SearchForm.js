import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { fetchApi } from "../redux/actions";
import "./SearchForm.css";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      characterSearched: '',
    };
  }

  handleChange = ({ target: { value } }) =>
    this.setState({
      inputText: value,
      characterSearched: '',
    });

  submitName = (e) => {
    e.preventDefault();
    const { inputText } = this.state;
    const { fetchData } = this.props;

    this.setState({
      inputText: '',
      characterSearched: inputText,
    });
    console.log(inputText)
    fetchData(inputText);
  };

  render() {
    const { inputText } = this.state;
    const { handleChange, submitName } = this;

    return (
      <div>
        <form onSubmit={submitName}>
          <h1>Type a character below:</h1>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Character"
            value={inputText}
          />
          <div className="buttonSection">
            <button className="submitButton" type="submit">
              Search!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: (query) => dispatch(fetchApi(query)),
});

export default connect(null, mapDispatchToProps)(SearchForm);

SearchForm.propTypes = {
  fetchData: propTypes.func.isRequired,
};
