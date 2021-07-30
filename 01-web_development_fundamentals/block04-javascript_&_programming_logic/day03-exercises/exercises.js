// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

// n = 5;
// asteriscos = '';

// for (idx = 0; idx < n; idx += 1) {
//   asteriscos += '*';
// }
// for (idx = 0; idx < n; idx += 1) {
//   console.log(asteriscos);
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

// n = 5;
// asteriscos = '';

// for (idx = 0; idx < n; idx += 1) {
//   asteriscos += '*';
//   console.log(asteriscos);
// }

// 3- Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

// n = 5;

// for (index = 0; index < n; index += 1) {
//   asteriscos = '';

//   for (idx = 0; idx < n; idx += 1) {
//     if (idx >= n - (index + 1)) {
//       asteriscos += '*';
//     } else {
//       asteriscos += ' ';
//     }
//     if (idx === n - 1) {
//       console.log(asteriscos);
//       break;
//     }
//   }
// }

// Broken 3
// for (index = 0; index < n; index += 1) {
//     asteriscos = '';
//     for (idx = 0; idx < n; idx += 1) {
//     if (idx >= n - (index + 1)) {
//       asteriscos += '*';
//     }
//     if (idx == n - 1) {
//         console.log(asteriscos)
//     }
//     asteriscos += ' ';
//   }
// }

// 4- Depois, faça uma pirâmide com n asteriscos de base:

n = 5;
console.log(n/2 +0.5)
for (index = 0; index < n / 2 + 0.5; index += 1) {
  asteriscos = '';
  for (idx = 0; idx < n; idx += 1) {
    if (idx == n / 2 + 0.5) {
      asteriscos += '*';
    }
    else if () {
        asteriscos += '*';
    }
     else {
      asteriscos += ' ';
    }
  }
  console.log(asteriscos)
}

// 1  123  12345
