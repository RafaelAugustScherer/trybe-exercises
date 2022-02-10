const { expect } = require('chai');
const ex1 = require('../ex1');

describe('Testa função ex1 (exercícios 1 ao 3)', () => {
  it('Número positivo', () => {
    const result = ex1(10);
    expect(result).to.be.equal('positivo');
  });

  it('Número negativo', () => {
    const result = ex1(-5);
    expect(result).to.be.equal('negativo');
  });

  it('Número neutro', () => {
    const result = ex1(0);
    expect(result).to.be.equal('neutro');
  });

  it('Objeto (erro)', () => {
    const result = ex1({ name: 'Jesse' });
    expect(result).to.be.equal('o valor deve ser um número');
  });
});