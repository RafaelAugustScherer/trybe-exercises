import React, { Component } from 'react';
import PropTypes from 'prop-types';

const typeRefs = {
  Fire: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/1024px-Pok%C3%A9mon_Fire_Type_Icon.svg.png',
    'rgb(255,152,63)',
  ],
  Electric: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1024px-Pok%C3%A9mon_Electric_Type_Icon.svg.png',
    'rgb(251,210,1)',
  ],
  Dragon: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/1200px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png',
    'rgb(0,111,202)',
  ],
  Poison: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/512px-Pok%C3%A9mon_Poison_Type_Icon.svg.png',
    'rgb(182,103,207)',
  ],
  Psychic: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/2048px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png',
    'rgb(255,102,118)',
  ],
  Bug: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/2048px-Pok%C3%A9mon_Bug_Type_Icon.svg.png',
    'rgb(132,196,0)',
  ],
  Normal: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/512px-Pok%C3%A9mon_Normal_Type_Icon.svg.png',
    'rgb(146,155,162)',
  ],
};

class Pokemon extends Component {

  // https://pt-br.reactjs.org/docs/handling-events.html
  constructor(props) {
    super(props);
    this.state = { isFavorite: true }
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleFavorite() {
    this.setState(prevState => ({
      isFavorite: !prevState.isFavorite
    }));
  }
  
  render() {
    const { pokemon: { id, name, type, averageWeight, image } } = this.props;

    return (
    <div key={name} className="pokemon-div" style={{ borderColor: typeRefs[type][1] }}>
    <span className="pokemon-id">#{ id }</span>
    <div>
      <img className="pokemon-image" src={image} alt="Pokemon Name" />
      <p className="pokemon-name">{name}</p>
    </div>
    <div>
      <img className="type-image" src={typeRefs[type][0]} alt="Type Icon" />

      <p className="pokemon-type">{type}</p>
    </div>
    <div id="pokemon-lower-div">
      <p className="pokemon-weight">
        Avg. Weight: {averageWeight.value} {averageWeight.measurementUnit}
      </p>
      <i className={ this.state.isFavorite ? "bi bi-star-fill" : "bi bi-star" } onClick={ this.handleFavorite }></i>
    </div>
  </div>
    )
  }
}

// const Pokemon = ({ pokemon: { id, name, type, averageWeight, image } }) => (
//   <div key={name} className="pokemon-div" style={{ borderColor: typeRefs[type][1] }}>
//     <span className="pokemon-id">#{ id }</span>
//     <div>
//       <img className="pokemon-image" src={image} alt="Pokemon Name" />
//       <p className="pokemon-name">{name}</p>
//     </div>
//     <div>
//       <img className="type-image" src={typeRefs[type][0]} alt="Type Icon" />

//       <p className="pokemon-type">{type}</p>
//     </div>
//     <div id="pokemon-lower-div">
//       <p className="pokemon-weight">
//         Avg. Weight: {averageWeight.value} {averageWeight.measurementUnit}
//       </p>
//       <i className="bi bi-star-fill"></i>
//     </div>
//   </div>
// );

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
