"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = __importDefault(require("./methods"));
console.log(methods_1.default.greeter('John'));
console.log(methods_1.default.personAge('Ana', 31));
