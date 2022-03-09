'use strict';

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
  });

  return User;
}

module.exports = User;