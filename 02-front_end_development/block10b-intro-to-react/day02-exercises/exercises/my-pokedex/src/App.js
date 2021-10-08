import './App.css';
import PokemonList from './components/PokemonList';
import data from './assets/data';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <>
    <Header title="PokeDex - Exercise" />
    <div className="App">
      <PokemonList pokemons={ data } />
      <Search />
    </div>
    </>
  );
}

export default App;
