const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  return names.reduce((countA, curName) => {
    let a = curName.split('').filter((char) => char.toLowerCase() === 'a');

    return countA + a.length;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);
