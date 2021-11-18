import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class CharacterInfo extends React.Component {
  render() {
    const { character, loading, error } = this.props;

    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

const mapStateToProps = (state) => ({
  character: state.character,
  loading: state.isFetching,
  error: state.error,
})

export default connect(mapStateToProps)(CharacterInfo);

CharacterInfo.propTypes = {
  character: propTypes.objectOf(propTypes.any),
  loading: propTypes.bool,
  error: propTypes.string,
}.isRequired
