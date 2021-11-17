import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clients from './pages/Clients';
import ClientsRegister from './pages/ClientsRegister';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/clients" element={ <Clients /> } />
        <Route path="/clientsRegister" element={ <ClientsRegister /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
