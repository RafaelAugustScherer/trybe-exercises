const searchEmployee = require('./searchEmployee');
const data = require('./data');

describe('Exercício Bônus', () => {
  test('Verifica se searchEmployee é uma função', () =>
    expect(searchEmployee).toBeInstanceOf(Function));

  test('Verifica se searchEmployee retorna o erro esperado com relação a ID', () =>
    expect(() => searchEmployee('id', 'firstName')).toThrowError('ID não identificada'));

  test('Verifica se searchEmployee retorna o erro esperado com relação a consulta', () =>
    expect(() => searchEmployee(data[0].id, 'fistName')).toThrowError('Informação indisponível'));

  test('Verifica se searchEmployee traz o retorno esperado', () =>
    expect(searchEmployee(data[0].id, 'firstName')).toEqual(`O empregado tem o valor 'firstName' de ${data[0].firstName}`));
});
