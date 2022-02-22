const connection = require('./connection');

const handleError = (err) => {
  console.error(err);
  return null;
} 

const add = async (name, brand) => {
    try {
      const [ result ] = await connection.query('INSERT INTO products (name, brand) VALUES (?, ?);', [name, brand]);
      if (!result.insertId) return null;
  
      return { id: result.insertId, name, brand };
    } catch (e) {
      handleError(e);
    }
};

const getAll = async () => {
  try {
    const [rows] = await connection.query('SELECT * FROM products');
    return rows;
  } catch (e) {
    handleError(e);
  }
};

const getById = async (id) => {
  try {
    const [result] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
    if (!result.length) return null;
    return result[0];
  } catch (e) {
    handleError(e);
  }
};

const update = async (id, name, brand) => {
  try {
    const product = await getById(id);
    if (!product) return false;
    await connection.query('UPDATE products SET name = ?, brand = ? WHERE id = ?', [name, brand, id]);
    return true;
  } catch (e) {
    handleError(e);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return false;
    await connection.query('DELETE FROM products WHERE id = ?', [id]);
    return product;
  } catch (e) {
    handleError(e);
  }
};

module.exports = { add, getAll, getById, update, exclude };