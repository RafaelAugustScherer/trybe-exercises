const readLine = require('readline-sync');

const ex8Function = (integer) => new Promise((resolve, reject) => {
  if (!Number.isInteger(integer) || integer < 0) reject('O número deve ser inteiro e maior que zero');

  const divByThree = () => integer % 3 === 0;
  const divByFive = () => integer % 5 === 0;

  if (divByThree() && divByFive()) resolve('FizzBuzz');
  if (divByThree()) resolve('Fizz');
  if (divByFive()) resolve('Buzz');
  reject(integer);
});

const integer = readLine.questionInt('Insira um numero: ');

ex8Function(integer)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
