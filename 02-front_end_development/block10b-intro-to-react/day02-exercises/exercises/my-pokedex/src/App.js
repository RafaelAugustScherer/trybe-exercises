import { Component } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import Header from './components/Header';
import Search from './components/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonsToPush: [],
    };
  }

  PushPokemonToList = (pokemon) => {
    const { pokemonsToPush } = this.state;
    this.setState({
      pokemonsToPush: [...pokemonsToPush, pokemon],
    });
    const prevPokedex = JSON.parse(localStorage.getItem('myPokedex'));
    const newPokedex = JSON.stringify([...prevPokedex, pokemon]);
    localStorage.setItem('myPokedex', newPokedex);
  };

  RemovePokemonFromList = (pokemon) => {
    const { pokemonsToPush } = this.state;
    const newPokemons = pokemonsToPush.filter((listPokemon) => listPokemon !== pokemon);
    this.setState({
      pokemonsToPush: newPokemons,
    });
    const prevPokedex = JSON.parse(localStorage.getItem('myPokedex'));
    const newPokedex = prevPokedex.filter((storagePokemon) => storagePokemon.id !== pokemon.id);
    localStorage.setItem('myPokedex', JSON.stringify(newPokedex));
  };

  render() {
    return (
      <>
        <Header title="PokeDex - Exercise" />
        <div className="App">
          <PokemonList searchedPokemons={this.state.pokemonsToPush} />
          <Search funcToPush={this.PushPokemonToList} funcToRemove={this.RemovePokemonFromList} />
        </div>
      </>
    );
  }
}

export default App;
