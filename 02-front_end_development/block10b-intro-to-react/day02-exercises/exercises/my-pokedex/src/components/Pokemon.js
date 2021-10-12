import React, { Component } from 'react';
import PropTypes from 'prop-types';
import typeRefs from '../assets/typeRefs';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: this.props.isFavorite,
    };
  }

  handleFavorite = async (id) => {
    await this.setState((prevState) => ({
      isFavorite: !prevState.isFavorite,
    }));

    this.props.handleFavorite(id, this.state.isFavorite);
  };

  render() {
    const {
      pokemon: { id, name, types, averageWeight, image },
    } = this.props;
    return (
      <div className="Pokemon" style={{ borderColor: typeRefs[types[0]][1] }}>
        <span className="pokemon-id">#{id}</span>
        <div>
          <img className="pokemon-image" src={image} alt="Pokemon Name" />
          <p className="pokemon-name">{name}</p>
        </div>
        {types.map((type, idx) => (
          <div key={idx}>
            <img className="type-image" src={typeRefs[type][0]} alt="Type Icon" />

            <p className="pokemon-type">{type}</p>
          </div>
        ))}
        <div id="pokemon-lower-div">
          <p className="pokemon-weight">
            Avg. Weight: {averageWeight.value} {averageWeight.measurementUnit}
          </p>
          <i
            className={this.state.isFavorite ? 'bi bi-star-fill' : 'bi bi-star'}
            onClick={() => this.handleFavorite(id)}
          ></i>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: 'kg',
  }),
  image: PropTypes.string,
};

export default Pokemon;
