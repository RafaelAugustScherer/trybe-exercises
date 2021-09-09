const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const flattened = arrays.reduce((result, currValue) => {
    currValue.forEach((el) => result.push(el));
    return result;
  }, []);

  return flattened;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);