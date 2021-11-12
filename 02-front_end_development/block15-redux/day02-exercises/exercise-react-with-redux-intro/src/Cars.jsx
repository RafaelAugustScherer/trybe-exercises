import React from 'react';
import { connect } from 'react-redux';
import { moveCar } from './redux/actionCreators';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars({
  redCar, blueCar, yellowCar, moveCar
}) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button type="button" onClick={ () => moveCar('redCar', !redCar) }>Move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button type="button" onClick={ () => moveCar('blueCar', !blueCar) }>Move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button type="button" onClick={ () => moveCar('yellowCar', !yellowCar) }>Move</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ cars }) => ({
  ...cars
});

const dispatchStateToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side))
});

export default connect(mapStateToProps, dispatchStateToProps)(Cars);