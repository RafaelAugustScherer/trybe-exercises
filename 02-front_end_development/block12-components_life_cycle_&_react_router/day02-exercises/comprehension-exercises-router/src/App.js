import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from  './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    const userObj = {username: 'joao', password: '1234'};
    return (
      <BrowserRouter>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/users">Users</Link></p>
        <p><Link to="/strict-access">Strict Access</Link></p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning" />} />
          <Route exact path="/strict-access" render={() => <StrictAccess user={userObj} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
