//Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
console.log('Exercício 1: ');
for (idx = 0; idx < numbers.length; idx += 1) {
  console.log('Número ', idx + 1, ': ', numbers[idx]);
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
console.log('Exercício 2: ');
sum = 0;
for (num of numbers) {
  sum += num;
}
console.log('Soma dos valores: ', sum);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
console.log('Exercício 3: ');
avg = sum / numbers.length;
console.log('Média aritmética: ', avg);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
console.log('Exercício 4: ');
if (avg > 20) {
  console.log('valor maior que 20');
} else if (avg <= 20) {
  console.log('valor menor ou igual a 20');
} else {
  console.log('valor de média inválido');
}

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
console.log('Exercício 5: ');
biggerNum = 0;
for (num of numbers) {
  if (num > biggerNum) {
    biggerNum = num;
  }
}
console.log('Maior número: ', biggerNum);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
console.log('Exercício 6: ');
odd = 0;
for (num of numbers) {
  if (num % 2 == 1) {
    odd += 1;
  }
}

if (odd == 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log('Ímpares: ', odd);
}

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
console.log('Exercício 7: ');
lowerNum = numbers[0];

for (num of numbers) {
  if (num < lowerNum) {
    lowerNum = num;
  }
}
console.log('Menor número: ', lowerNum);

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
console.log('Exercício 8: ');
arr = [];
for (idx = 1; idx <= 25; idx += 1) {
  arr.push(idx)
}
console.table(arr)

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
console.log('Exercício 9: ');
for (el of arr) {
    console.log(el / 2)
}