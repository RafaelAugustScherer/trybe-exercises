const fs = require('fs').promises;
const { expect } = require('chai');
const writeFile = require('../ex4');

describe('Teste da função writeFile (exercício 4 e 5)', () => {
  const FILE_CONTENT = 'Just Testing';

  after(() => {
    fs.unlink('./file.txt', () => {});
  });

  it('Mensagem tem o valor "ok"', async () => {
    const response = await writeFile('file.txt', FILE_CONTENT);
    expect(response).to.be.a('string');
    expect(response).to.equals('ok');
  });

  it('Arquivo foi salvo corretamente', async () => {
    const response = await fs.readFile('file.txt', 'utf-8')
      .then(content => content)
      .catch(err => console.error(err));

    expect(response).to.equals(FILE_CONTENT);
  });
})