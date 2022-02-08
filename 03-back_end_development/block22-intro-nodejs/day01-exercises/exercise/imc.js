const readLine = require('readline-sync');

const calculateBMI = (weight, height) => {
  const BMI = (weight / (height ** 2)).toFixed(2);

  let status = 'Abaxo do peso (magreza)';
  if (BMI >= 18.5 && BMI < 25) status = 'Peso normal';
  if (BMI >= 25 && BMI < 30) status = 'Acima do peso (sobrepeso)';
  if (BMI >= 30 && BMI < 35) status = 'Obesidade grau I';
  if (BMI >= 35 && BMI < 40) status = 'Obesidade grau II';
  if (BMI >= 40) status = 'Obesidade graus III e IV';

  return `IMC ${BMI} - ${status}`;
}

const weight = readLine.questionFloat('Qual seu peso (kg)? ');
const height = readLine.questionFloat('Qual sua altura (metros)? ');

module.exports = console.log(calculateBMI(weight, height));