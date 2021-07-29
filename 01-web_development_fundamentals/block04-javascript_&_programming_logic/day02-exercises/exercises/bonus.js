// Bônus
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers1 = [...numbers];
for (num in numbers1) {
  for (idx = 0; idx < numbers.length; idx += 1) {
    if (numbers1[idx] > numbers1[idx + 1]) {
      temp = numbers1[idx];
      numbers1[idx] = numbers1[idx + 1];
      numbers1[idx + 1] = temp;
    }
  }
}
console.log(numbers1);

// 2. Ordene o array numbers em ordem decrescente e imprima seus valores;
let numbers2 = [...numbers];
for (num in numbers2) {
  for (idx = 0; idx < numbers2.length; idx += 1) {
    if (numbers2[idx] < numbers2[idx + 1]) {
      temp = numbers2[idx];
      numbers2[idx] = numbers2[idx + 1];
      numbers2[idx + 1] = temp;
    }
  }
}
console.log(numbers2);

// 3. Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
numbers3 = [];
console.log(numbers);
for (idx = 0; idx < numbers.length; idx += 1) {
  if (!numbers[idx + 1]) {
    numbers3.push(numbers[idx] * 2);
  } else {
    numbers3.push(numbers[idx] * numbers[idx + 1]);
  }
}
console.table(numbers3);
