import React, { Component } from 'react';

class SearchBar extends Component {
  onChange = ({ target: { value } }) => this.props.onChange(value);

  render() {
    return (
      <input
        className="Search-bar"
        type="text"
        placeholder="Pesquise por um Pokémon..."
        value={this.props.value}
        onChange={this.onChange}
      />
    );
  }
}

export default SearchBar;
