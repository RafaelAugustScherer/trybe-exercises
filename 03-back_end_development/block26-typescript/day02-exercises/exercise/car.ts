enum Color {
  preto = 'preto',
  branco = 'branco',
  vermelho = 'vermelho',
  prata = 'prata',
}

enum Direction {
  direita = 'direita',
  esquerda = 'esquerda',
}

type Door = {
  index: number,
  status: 'closed' | 'open'
};

class Car {
  brand: string;
  color: Color;
  doors: number;
  carDoors: Door[];
  status: 'ligado' | 'desligado';
  speed: number;
  
  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
    this.carDoors = [];
    this.status = 'desligado';
    this.speed = 0;

    for (let i = 0; i < this.doors; i += 1) {
      const door: Door = { index: i, status: 'closed' };
      this.carDoors.push(door);
    }
  }

  honk(): void {
    console.log('Beep!');
  }

  openTheDoor(door: Door) {
    if (door.index > this.doors - 1) {
      console.log('Porta inexistente');
    } else if (door.status === 'open') {
      console.log(`Porta ${door.index} já está aberta`)
    } else {
      this.carDoors[door.index].status = 'open';
      console.log('Abrindo a porta ' + door.index);
    }
  }

  closeTheDoor(door: Door) {
    if (door.index > this.doors - 1) {
      console.log('Porta inexistente');
    } else if (door.status === 'closed') {
      console.log(`Porta ${door.index} já está fechada`)
    } else {
      this.carDoors[door.index].status = 'closed';
      console.log('Fechando a porta ' + door.index);
    }
  }

  turnOn() {
    if (this.status === 'ligado') {
      console.log('O carro já esta ligado');
    } else {
      this.status = 'ligado';
      console.log('Ligando o carro');
    }
  }

  turnOff() {
    if (this.status === 'desligado') {
      console.log('O carro já esta desligado');
    } else {
      this.status = 'desligado';
      console.log('Desligando o carro');
    }
  }

  speedUp() {
    this.speed += 10;
    console.log(`Acelerando para ${this.speed} km/h`);
  }

  speedDown() {
    this.speed -= 10;
    console.log(`Desacelerando para ${this.speed} km/h`);
  }

  stop() {
    this.speed = 0;
    console.log(`O carro parou`);
  }

  turn(direction: Direction) {
    console.log(`Virando para a ${direction}`);
  }
}

export {
  Car,
  Color,
  Direction,
}