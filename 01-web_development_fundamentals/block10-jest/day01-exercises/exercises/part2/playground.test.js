const { encode, decode, techList, hydrate } = require('./playgroundFunctions');

describe('Parte II', () => {
  describe('Exercício 1', () => {
    test('Encode', () => {
      expect(encode).toBeInstanceOf(Function);
      expect(encode('a')).toEqual('1');
      expect(encode('e')).toEqual('2');
      expect(encode('i')).toEqual('3');
      expect(encode('o')).toEqual('4');
      expect(encode('u')).toEqual('5');
      expect(encode('bcdfghjklmnpqrstvwxyz')).toEqual('bcdfghjklmnpqrstvwxyz');
      expect(encode('hi there!')).toHaveLength(9);
    });

    test('Decode', () => {
      expect(decode).toBeInstanceOf(Function);
      expect(decode('1')).toEqual('a');
      expect(decode('2')).toEqual('e');
      expect(decode('3')).toEqual('i');
      expect(decode('4')).toEqual('o');
      expect(decode('5')).toEqual('u');
      expect(decode('6789')).toEqual('6789');
      expect(encode('h3 th2r2!')).toHaveLength(9);
    });
  });

  describe('Exercício 2', () => {
    test('Testa se a função techList é definida', () => expect(techList).toBeDefined());
    test('Testa se techList é uma função', () => expect(techList).toBeInstanceOf(Function));
    test('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
      expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
        {
          tech: 'CSS',
          name: 'Lucas',
        },
        {
          tech: 'HTML',
          name: 'Lucas',
        },
        {
          tech: 'JavaScript',
          name: 'Lucas',
        },
        {
          tech: 'Jest',
          name: 'Lucas',
        },
        {
          tech: 'React',
          name: 'Lucas',
        },
      ]);
    });
    test('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
      expect(techList([], 'Lucas')).toBe('Vazio!');
    });
  });
  describe('Exercício 3', () => {
    test('Testa se a função hydrate é definida', () => {
      expect(hydrate).toBeDefined();
    });
    test('Testa se hydrate é uma função', () => {
      expect(typeof hydrate).toBe('function');
    });
    test('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
      expect(hydrate('1 cerveja')).toBe('1 copo de água');
      expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
      expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
      expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
      expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
  });
});
