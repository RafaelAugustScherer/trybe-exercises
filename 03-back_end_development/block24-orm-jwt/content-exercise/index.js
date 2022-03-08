const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  host: '127.0.0.1',
  username: 'root',
  password: 'root',
  database: 'orm_example',
  dialect: 'mysql'
});

const UserModel = sequelize.define('User', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'users',
  timestamps: false,
});

