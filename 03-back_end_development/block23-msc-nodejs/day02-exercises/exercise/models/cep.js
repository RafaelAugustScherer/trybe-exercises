const connection = require('./connection');

const getDataByCep = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
  const [data] = await connection.execute(query, [cep]);

  return data;
}

const postCep = async (data) => {
  const query = 'INSERT INTO ceps VALUES (?, ?, ?, ?, ?)';
  const [response] = await connection.execute(query, [...data]);

  return response;
}

module.exports = {
  getDataByCep,
  postCep,
}