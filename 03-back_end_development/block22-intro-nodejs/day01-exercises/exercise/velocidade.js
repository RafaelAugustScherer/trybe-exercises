const readLine = require('readline-sync');

const avgSpeed = (distance, time) => ((distance * 1000) / (time * 3600)).toFixed(2);

const distance = readLine.questionInt('Qual a distancia percorrida (m)? ');
const time = readLine.questionInt('Qual o tempo decorrido para percorrer (s)? ');

console.log(`Velocidade Média: ${avgSpeed(distance, time)} Km/h`);