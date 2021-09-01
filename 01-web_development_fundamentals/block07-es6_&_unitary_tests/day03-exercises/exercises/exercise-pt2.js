const assert = require('assert');

/* 2.1 */

const addOne = (arr) => {
  let newArr = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    newArr[idx] = arr[idx] + 1;
  }

  return newArr;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
let expected = [32, 58, 13, 6];
let output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

/* 2.2 */

const wordLengths = (words) => {
  let lengthArr = [];

  words.forEach((word) => {
    lengthArr.push(word.length);
  });

  return lengthArr;
};

let words = ['sun', 'potato', 'roundabout', 'pizza'];
expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
output = wordLengths(words);
assert.deepStrictEqual(output, expected);

/* 2.3 */

const sumAllNumbers = (arr) => {
  let sum = 0;

  arr.forEach((num) => {
    sum += num;
  });

  return sum;
};

const numbers = [9, 23, 10, 3, 8];
expected = 53;
output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

/* 2.4 */

const findTheNeedle = (arr, needle) => {
  return arr.indexOf(needle);
};

words = ['house', 'train', 'slide', 'needle', 'book'];
expected = 3;
output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
