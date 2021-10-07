import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

const PokemonList = ({ pokemons }) => (
    <>
    <h2 className="app-title">My Pokedex</h2>
      {pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} />
      ))}
    </>
);

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
};

export default PokemonList;
