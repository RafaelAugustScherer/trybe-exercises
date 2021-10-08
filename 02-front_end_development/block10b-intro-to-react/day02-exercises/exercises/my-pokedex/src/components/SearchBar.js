import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
    this.handleSearch = this.handleSearch.bind(this);
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleSearch() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.inputValue}`)
      .then((response) => response.json())
      .then(({ id, name, types, weight, sprites }) => {
        types = types.map(({ type }) => type.name);
        this.props.funcToRender({
          id,
          name,
          types,
          averageWeight: {
            value: weight,
            measurementUnit: 'kg',
          },
          image: sprites.front_default,
        });
      });
  }

  render() {
    return (
      <input
        className="SearchBar"
        type="text"
        placeholder="Pesquise por um Pokémon..."
        value={this.state.inputValue}
        onChange={(e) => this.updateInputValue(e)}
        onKeyUp={this.handleSearch}
      />
    );
  }
}

export default SearchBar;
