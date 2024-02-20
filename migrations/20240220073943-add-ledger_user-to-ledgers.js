'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('"Ledgers"', 'ledger_user_id', {
      type: Sequelize.STRING,
      allowNull: true, // Set to false if the column should not allow null values
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Ledgers', 'ledger_user_id');
  }
};