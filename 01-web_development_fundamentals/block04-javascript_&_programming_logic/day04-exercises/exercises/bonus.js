// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:

// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

function calculateRomanNumber(rNumber) {
  numValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  rNumber = rNumber.split('');
  prevNumber = 0;
  sum = 0;
  for (letter of rNumber) {
    numValue = numValues[letter];

    if (prevNumber < numValue) {
      sum += numValue - prevNumber - prevNumber;
    } else {
      sum += numValue;
    }

    prevNumber = numValues[letter];
  }
  console.log(sum);
}

testNumber = 'CMXXXVII';
calculateRomanNumber(testNumber)
