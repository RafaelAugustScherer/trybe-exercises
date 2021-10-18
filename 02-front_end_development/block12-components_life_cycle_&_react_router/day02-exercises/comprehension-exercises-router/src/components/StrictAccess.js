import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  isUserAuthenticated = () => {
    const {
      user: { username, password },
    } = this.props;

    return !!(username === 'joao' && password === '1234');
  };

  render() {
    const {
      user: { username },
    } = this.props;
    const { isUserAuthenticated } = this;
    return <>{isUserAuthenticated() ? <p>Welcome {username}!</p> : <Redirect to="/" />}</>;
  }
}

export default StrictAccess;
