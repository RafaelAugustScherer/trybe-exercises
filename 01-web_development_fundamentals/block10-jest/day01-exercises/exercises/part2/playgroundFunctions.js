const findObjectEntryByKey = (obj, key) => Object.entries();

function encode(sentence) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  sentence = sentence.split('');

  sentence = sentence.map((char) => {
    let encrypted = Object.entries(code).find(([string]) => string === char);

    return encrypted ? encrypted[1] : char;
  });

  return sentence.join('');
}

function decode(sentence) {
  let code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  sentence = sentence.split('');

  sentence = sentence.map((char) => {
    let encrypted = Object.entries(code).find(([string]) => string === char);

    return encrypted ? encrypted[1] : char;
  });

  return sentence.join('');
}

const techList = (techs, name) =>
  techs.length === 0 ? 'Vazio!' : techs.sort().map((tech) => ({ tech, name }));

const hydrate = (bebidas) => {
  bebidas = bebidas.split('');
  const coposdagua = bebidas.reduce((acc, char) => (Number(char) ? acc + Number(char) : acc), 0);

  return coposdagua === 1 ? '1 copo de água' : `${coposdagua} copos de água`;
};

module.exports = {
  encode,
  decode,
  techList,
  hydrate,
};
