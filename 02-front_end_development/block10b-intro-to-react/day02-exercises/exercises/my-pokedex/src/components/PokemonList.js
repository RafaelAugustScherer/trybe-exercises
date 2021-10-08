import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

const PokemonList = ({ pokemons }) => (
    <div className="Pokemon-list" key="Pokemon-list">
    <h2 className="pokedex-title" key="pokedex-title">My Pokedex</h2>
      {pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} />
      ))}
    </div>
);

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
};

export default PokemonList;
