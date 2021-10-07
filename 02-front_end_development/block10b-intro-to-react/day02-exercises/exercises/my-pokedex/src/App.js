import './App.css';
import PokemonList from './PokemonList';
import data from './data';
import Header from './Header';

function App() {
  return (
    <>
    <Header title="PokeDex - Exercise" />
    <div className="App">
      <PokemonList pokemons={ data } />
    </div>
    </>
  );
}

export default App;
