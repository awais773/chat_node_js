'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('patients', 'insurance', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('patients', 'agency', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('patients', 'coordinator', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('patients', 'OT', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('patients', 'PT', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('patients', 'ST', {
      type: Sequelize.STRING,
      allowNull: true,
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('patients', 'insurance');
    await queryInterface.removeColumn('patients', 'agency');
    await queryInterface.removeColumn('patients', 'coordinator');
    await queryInterface.removeColumn('patients', 'OT');
    await queryInterface.removeColumn('patients', 'PT');
    await queryInterface.removeColumn('patients', 'ST');
  },
};
