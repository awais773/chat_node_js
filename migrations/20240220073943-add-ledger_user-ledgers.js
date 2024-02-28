'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('ledgers', 'ledger_user_id', {
      type: Sequelize.STRING,
      allowNull: true, // Set to false if the column should not allow null values
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('ledgers', 'ledger_user_id');
  }
};