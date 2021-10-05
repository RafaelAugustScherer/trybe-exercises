import './App.css';
import Pokemon from './Pokemon.jsx';
import data from './data';

function App() {
  return (
    <>
    <div className="App-header">
    <h1>PokeDex - Exercise</h1>
    </div>
    <div className="App">
      {data.map((pokemon => <Pokemon pokemon={pokemon}/>))}
    </div>
    </>
  );
}

export default App;
