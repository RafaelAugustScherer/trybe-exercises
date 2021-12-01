import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { MyContext } from './App';

function Cars() {
  return (
    <MyContext.Consumer>
      {({ redCar, blueCar, yellowCar, moveCar }) => (
        <div>
          <div>
            <img
              className={redCar ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button onClick={() => moveCar('redCar')} type="button">
              Move
            </button>
          </div>
          <div>
            <img
              className={blueCar ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
            />
            <button onClick={() => moveCar('blueCar')} type="button">
              Move
            </button>
          </div>
          <div>
            <img
              className={yellowCar ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button onClick={() => moveCar('yellowCar')} type="button">
              Move
            </button>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default Cars;
