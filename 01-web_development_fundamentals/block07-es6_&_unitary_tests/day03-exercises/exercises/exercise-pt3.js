const assert = require('assert');

/* 3.1 */

const greetPeople = (people) => {
  let greetingArr = [];

  people.forEach((person) => {
    greetingArr.push(`Hello ${person}`);
  });

  return greetingArr;
};

let parameter = ['Irina', 'Ashleigh', 'Elsa'];
let result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);

/* 3.2 */

const removeVowels = (word) => {
  const characters = word.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const results = [];

  let vowelCounter = 0;
  characters.forEach((char) => {
    if (vowels.includes(char)) {
      vowelCounter += 1;
      char = vowelCounter;
    }
    results.push(char);
  });
  return results.join('');
};

parameter = 'Dayane';
result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result);

/* 3.3 */

const greaterThanTen = (arr) => {
  let resultArr = []

  arr.forEach(num => {
      if (num > 10) resultArr.push(num)
  });
  
  return resultArr;
};

parameter = [4, 10, 32, 9, 21];
result = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter), result)

/* 3.4 */

function secondThirdSmallest(arr) {
    arr.sort((a, b) =>  a - b);

    let resultArr = [arr[1], arr[2]];
    return resultArr;
};

parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result)