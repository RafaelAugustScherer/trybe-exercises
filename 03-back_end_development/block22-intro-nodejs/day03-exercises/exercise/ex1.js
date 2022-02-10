const ex1 = (int) => {
  if (typeof int !== 'number')
    return 'o valor deve ser um número';

  if (int > 0) return 'positivo';
  if (int < 0) return 'negativo';
  return 'neutro';
}

module.exports = ex1;