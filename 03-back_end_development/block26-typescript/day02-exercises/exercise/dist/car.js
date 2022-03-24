"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = exports.Color = exports.Car = void 0;
var Color;
(function (Color) {
    Color["preto"] = "preto";
    Color["branco"] = "branco";
    Color["vermelho"] = "vermelho";
    Color["prata"] = "prata";
})(Color || (Color = {}));
exports.Color = Color;
var Direction;
(function (Direction) {
    Direction["direita"] = "direita";
    Direction["esquerda"] = "esquerda";
})(Direction || (Direction = {}));
exports.Direction = Direction;
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
        this.carDoors = [];
        this.status = 'desligado';
        this.speed = 0;
        for (let i = 0; i < this.doors; i += 1) {
            const door = { index: i, status: 'closed' };
            this.carDoors.push(door);
        }
    }
    honk() {
        console.log('Beep!');
    }
    openTheDoor(door) {
        if (door.index > this.doors - 1) {
            console.log('Porta inexistente');
        }
        else if (door.status === 'open') {
            console.log(`Porta ${door.index} já está aberta`);
        }
        else {
            this.carDoors[door.index].status = 'open';
            console.log('Abrindo a porta ' + door.index);
        }
    }
    closeTheDoor(door) {
        if (door.index > this.doors - 1) {
            console.log('Porta inexistente');
        }
        else if (door.status === 'closed') {
            console.log(`Porta ${door.index} já está fechada`);
        }
        else {
            this.carDoors[door.index].status = 'closed';
            console.log('Fechando a porta ' + door.index);
        }
    }
    turnOn() {
        if (this.status === 'ligado') {
            console.log('O carro já esta ligado');
        }
        else {
            this.status = 'ligado';
            console.log('Ligando o carro');
        }
    }
    turnOff() {
        if (this.status === 'desligado') {
            console.log('O carro já esta desligado');
        }
        else {
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
    turn(direction) {
        console.log(`Virando para a ${direction}`);
    }
}
exports.Car = Car;
