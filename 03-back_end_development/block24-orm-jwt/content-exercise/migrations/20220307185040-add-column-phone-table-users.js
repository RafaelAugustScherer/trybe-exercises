'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Users', 'email', {
     type: Sequelize.STRING,
   });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('Users', 'email');
  }
};