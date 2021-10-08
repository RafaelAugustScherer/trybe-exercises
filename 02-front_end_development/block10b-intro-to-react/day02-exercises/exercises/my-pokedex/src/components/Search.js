import React, { Component } from 'react';
import Pokemon from './Pokemon';
import SearchBar from './SearchBar';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchStatus: false,
            pokemonToRender: '',
        }
        this.renderSearch = this.renderSearch.bind(this);
    }

  renderSearch(pokemon) {
    this.setState(({
        searchStatus: true,
        pokemonToRender: pokemon,
    }));
  }

  render() {
    return (
      <div className="search">
        <h2>Adicionar Pokémons</h2>
        <SearchBar funcToRender={this.renderSearch}/>
        { this.state.searchStatus ? <Pokemon pokemon={this.state.pokemonToRender} /> : null}
      </div>
    );
  }
}

export default Search;
