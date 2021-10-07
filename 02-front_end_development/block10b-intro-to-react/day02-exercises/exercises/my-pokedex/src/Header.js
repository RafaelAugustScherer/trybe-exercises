import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <div className="App-header">
    <h1>{ title }</h1>
  </div>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
