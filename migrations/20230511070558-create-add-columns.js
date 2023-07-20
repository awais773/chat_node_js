'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('patients', 'latitude_Two', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
    await queryInterface.addColumn('patients', 'longitude_Two', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('patients', 'latitude_Two');
    await queryInterface.removeColumn('patients', 'longitude_Two');
  },
};
