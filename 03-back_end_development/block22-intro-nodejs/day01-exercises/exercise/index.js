const readLine = require('readline-sync');

console.log('|  Numero  |   Script   |');
console.log('|    1     |    IMC     |');
console.log('|    2     | Velocidade |');
console.log('|    3     |  Sorteio   |');
console.log('');
const choice = readLine.questionInt('Escolha o script que deseja rodar: ');

if (choice === 1) require('./imc');
if (choice === 2) require('./velocidade');
if (choice === 3) require('./velocidade');