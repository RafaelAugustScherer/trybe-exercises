import React, { useState } from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
  const [redCar, moveRedCar] = useState(false);
  const [blueCar, moveBlueCar] = useState(false);
  const [yellowCar, moveYellowCar] = useState(false);

    return (
      <div>
        <div>
          <img
            className={redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveRedCar(!redCar)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveBlueCar(!blueCar)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveYellowCar(!yellowCar)}
            type="button"
          >
            Move
        </button>
        </div>
      </div>
    )
}

export default Cars;
