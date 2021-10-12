import React, { Component } from 'react';
import Pokemon from './Pokemon';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import Error from './Error';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: undefined,
      value: '',
      pokemon: {},
    };
  }

  updateSearchValue = (value) => this.setState({ value });

  isPokemonInPokedex = () => {
    const myPokedex = JSON.parse(localStorage.getItem('myPokedex'));
    const pokemon = myPokedex.find((pokemon) => pokemon.id === this.state.pokemon.id && pokemon.isFavorite);
    return pokemon ? true : false;
  };

  search = () => {
    this.setState({ status: undefined })
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.value}`)
      .then((response) => {
        if (response.ok) {
          response.json().then(({ id, name, types, weight, sprites }) => {
            types = types.map(({ type }) => type.name);

            this.renderSearch({
              id,
              name,
              types,
              averageWeight: {
                value: weight,
                measurementUnit: 'kg',
              },
              image: sprites.front_default,
              isFavorite: true,
            });
          });
        } else {
          this.setState({ status: false });
        }
      })
      .catch((err) => console.log('Fetch Error: ', err.message));
  };

  renderSearch = (pokemon) =>
    this.setState({
      status: true,
      pokemon,
    });

  pushToPokedex = () => this.props.funcToPush(this.state.pokemon);

  removeFromPokedex = () => this.props.funcToRemove(this.state.pokemon);

  render() {
    return (
      <div className="Search">
        <h2>Adicionar Pokémons</h2>
        <SearchBar onChange={this.updateSearchValue} value={this.state.searchValue} />
        <SearchButton onClick={this.search} pokemon={this.props.pokemon} />
        {this.state.status ? (
          <Pokemon
            pokemon={this.state.pokemon}
            isFavorite={this.isPokemonInPokedex()}
            handleFavorite={this.isPokemonInPokedex() ? this.removeFromPokedex: this.pushToPokedex}
          />
        ) : this.state.status === false ? (
          <Error />
        ) : null}
      </div>
    );
  }
}

export default Search;
