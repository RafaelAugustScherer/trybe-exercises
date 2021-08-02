// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

n = 5;
asterisks = '';

for (idx = 0; idx < n; idx += 1) {
  asterisks += '*';
}
for (idx = 0; idx < n; idx += 1) {
  console.log(asterisks);
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

n = 5;
asterisks = '';

for (idx = 0; idx < n; idx += 1) {
  asterisks += '*';
  console.log(asterisks);
}

// 3- Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

n = 5;

for (index = 0; index < n; index += 1) {
  asterisks = '';

  for (idx = 0; idx < n; idx += 1) {
    if (idx >= n - (index + 1)) {
      asterisks += '*';
    } else {
      asterisks += ' ';
    }
    if (idx === n - 1) {
      console.log(asterisks);
      break;
    }
  }
}

// Broken 3
// for (index = 0; index < n; index += 1) {
//     asterisks = '';
//     for (idx = 0; idx < n; idx += 1) {
//     if (idx >= n - (index + 1)) {
//       asterisks += '*';
//     }
//     if (idx == n - 1) {
//         console.log(asterisks)
//     }
//     asterisks += ' ';
//   }
// }

// 4- Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

n = 5;
startPos = n / 2 - 0.5;

count = 0;
for (index = 0; index < n; index += 2) {
  asterisks = '';
  for (idx = 0; idx < n; idx += 1) {
    if (idx <= startPos + count && idx >= startPos - count) {
      asterisks += '*';
    } else {
      asterisks += ' ';
    }
  }
  count += 1;

  console.log(asterisks);
}

// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// n = 7

//    *
//   * *
//  *   *
// *******

n = 7;
startPos = n / 2 - 0.5;

count = 0;
for (index = 0; index < n; index += 2) {
  asterisks = '';

  for (idx = 0; idx < n; idx += 1) {
    if (idx == startPos + count || idx == startPos - count) {
      asterisks += '*';
    }
    else if (index == n - 1) {
      asterisks += '*'
    } else {
      asterisks += ' ';
    }
  }
  count += 1;
  console.log(asterisks);
}

// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

n = 17

isPrime = true
for (index = 2; index < n; index += 1) {
  if (n % index == 0) {
    isPrime = false
  }
}

if (isPrime) {
  console.log('O número é primo.')
}
else {
  console.log('O número não é primo.')
}