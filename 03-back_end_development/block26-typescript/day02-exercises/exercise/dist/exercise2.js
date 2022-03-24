"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./car");
const carroMotora = new car_1.Car('Volkswagen', car_1.Color.prata, 4);
const goToDirectionAfter = (time, direction) => __awaiter(void 0, void 0, void 0, function* () {
    return (new Promise(resolve => {
        setTimeout(() => {
            if (direction) {
                carroMotora.turn(direction);
            }
            resolve(0);
        }, time);
    }));
});
const Drive = () => __awaiter(void 0, void 0, void 0, function* () {
    carroMotora.openTheDoor(carroMotora.carDoors[0]);
    carroMotora.closeTheDoor(carroMotora.carDoors[0]);
    carroMotora.turnOn();
    while (carroMotora.speed < 50) {
        carroMotora.speedUp();
    }
    // Trajeto até o passageiro
    yield goToDirectionAfter(600, car_1.Direction.esquerda);
    carroMotora.turn(car_1.Direction.esquerda);
    yield goToDirectionAfter(200, car_1.Direction.direita);
    yield goToDirectionAfter(1200);
    yield goToDirectionAfter(300, car_1.Direction.direita);
    carroMotora.turn(car_1.Direction.direita);
    yield goToDirectionAfter(400);
    carroMotora.stop();
    carroMotora.turnOff();
    // Trajeto até o destino
    carroMotora.openTheDoor(carroMotora.carDoors[3]);
    carroMotora.closeTheDoor(carroMotora.carDoors[3]);
    carroMotora.turnOn();
    while (carroMotora.speed < 50) {
        carroMotora.speedUp();
    }
    yield goToDirectionAfter(300, car_1.Direction.direita);
    carroMotora.turn(car_1.Direction.direita);
    yield goToDirectionAfter(2000);
    yield goToDirectionAfter(200, car_1.Direction.esquerda);
    carroMotora.turn(car_1.Direction.esquerda);
    yield goToDirectionAfter(400, car_1.Direction.direita);
    carroMotora.turn(car_1.Direction.direita);
    yield goToDirectionAfter(100);
    carroMotora.stop();
    carroMotora.turnOff();
    carroMotora.openTheDoor(carroMotora.carDoors[3]);
    carroMotora.closeTheDoor(carroMotora.carDoors[3]);
});
Drive();
