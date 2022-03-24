import { Car, Color, Direction } from './car';

const carroMotora = new Car('Volkswagen', Color.prata, 4);

const goToDirectionAfter = async (time: number, direction?: Direction) => (
  new Promise(resolve => {
    setTimeout(() => {
      if (direction) {
        carroMotora.turn(direction);
      }
      resolve(0);
    }, time);
  })
)

const Drive = async () => {
  carroMotora.openTheDoor(carroMotora.carDoors[0]);
  carroMotora.closeTheDoor(carroMotora.carDoors[0]);
  carroMotora.turnOn();
  
  while (carroMotora.speed < 50) {
    carroMotora.speedUp();
  }
  
  // Trajeto até o passageiro
  await goToDirectionAfter(600, Direction.esquerda);
  carroMotora.turn(Direction.esquerda);
  await goToDirectionAfter(200, Direction.direita);
  await goToDirectionAfter(1200);
  await goToDirectionAfter(300, Direction.direita);
  carroMotora.turn(Direction.direita);
  await goToDirectionAfter(400);
  
  carroMotora.stop();
  carroMotora.turnOff();

  // Trajeto até o destino
  carroMotora.openTheDoor(carroMotora.carDoors[3]);
  carroMotora.closeTheDoor(carroMotora.carDoors[3]);
  carroMotora.turnOn();

  while (carroMotora.speed < 50) {
    carroMotora.speedUp();
  }

  await goToDirectionAfter(300, Direction.direita);
  carroMotora.turn(Direction.direita);
  await goToDirectionAfter(2000);
  await goToDirectionAfter(200, Direction.esquerda);
  carroMotora.turn(Direction.esquerda);
  await goToDirectionAfter(400, Direction.direita);
  carroMotora.turn(Direction.direita);
  await goToDirectionAfter(100);

  carroMotora.stop();
  carroMotora.turnOff();
  carroMotora.openTheDoor(carroMotora.carDoors[3]);
  carroMotora.closeTheDoor(carroMotora.carDoors[3]);
}

Drive();


