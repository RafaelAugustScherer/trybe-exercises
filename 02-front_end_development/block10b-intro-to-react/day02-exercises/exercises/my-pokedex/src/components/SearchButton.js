import { Component } from 'react';

class SearchButton extends Component {

  render() {
    return (
      <button className="Search-button" onClick={this.props.onClick}>
        <i className="bi bi-search"></i>
      </button>
    );
  }
}

export default SearchButton;
