'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('documents', 'date', {
      type: Sequelize.STRING, // Change the type to STRING
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('documents', 'date');
  },
};
