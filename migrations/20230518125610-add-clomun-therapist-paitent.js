'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('therapists', 'careGiverRate', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
    queryInterface.addColumn('patients', 'document', {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('therapists', 'careGiverRate');
    queryInterface.removeColumn('patients', 'document');

  },
};