const professionalBoard = require('./data');

const searchEmployee = (id, detail) => {
  const foundEmployee = professionalBoard.find(({ id: employeeId }) => employeeId === id);

  if (!foundEmployee) throw new Error('ID não identificada');
  if (!foundEmployee[detail]) throw new Error('Informação indisponível');
  return `O empregado tem o valor '${detail}' de ${foundEmployee[detail]}`;
};

module.exports = searchEmployee;