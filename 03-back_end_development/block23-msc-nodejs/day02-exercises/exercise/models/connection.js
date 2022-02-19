const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
});

module.exports = connection;