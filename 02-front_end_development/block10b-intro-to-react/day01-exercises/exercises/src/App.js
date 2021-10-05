import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

function App() {
  const tasks = ['Wash the dishes', 'Clean the bathroom', 'Organize   bedroom']
  return (
    <>
    {/* Exercício 1 */}
    <div className="App">
      <ol key="tasks">
        { tasks.map(task => Task(task)) }
      </ol>
    </div>
    {/* Exercício 3 */}
    <Header />
    <Content />
    <Footer />
    </>
  );
}

export default App;
