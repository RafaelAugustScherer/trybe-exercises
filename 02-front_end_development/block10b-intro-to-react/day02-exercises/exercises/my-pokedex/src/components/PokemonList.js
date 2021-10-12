import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import data from '../assets/data';

class PokemonList extends Component {
  constructor(props) {
    super(props);

    if (!localStorage.getItem('myPokedex')) {
      localStorage.setItem('myPokedex', JSON.stringify(data));
    }
    this.state = {
      pokemons: JSON.parse(localStorage.getItem('myPokedex')),
    };
  }

  handleFavorite = (id) => {
    const prevPokedex = this.state.pokemons;
    const newPokedex = prevPokedex.filter((pokemon) => pokemon.id !== id);
    localStorage.setItem('myPokedex', JSON.stringify(newPokedex));
    this.setState({
      pokemons: newPokedex,
    });
  };

  render() {
    return (
      <div className="Pokemon-list">
        <h2 className="pokedex-title">My Pokedex</h2>
        {this.state.pokemons.map((pokemon) =>
          pokemon.isFavorite ? (
            <Pokemon pokemon={pokemon} key={pokemon.id} handleFavorite={this.handleFavorite} isFavorite={true} />
          ) : null
        )}
        { this.props.searchedPokemons.map((pokemon) => {
            return <Pokemon pokemon={pokemon} key={pokemon.id} handleFavorite={this.handleFavorite} isFavorite={true} />
        })
        }
      </div>
    );
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
};

export default PokemonList;
