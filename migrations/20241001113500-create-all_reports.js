'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('all_reports', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      reportedBy: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users", // The name of the referenced table (users)
          key: "id", // The name of the referenced column (id)
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      reportedTo: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users", // The name of the referenced table (users)
          key: "id", // The name of the referenced column (id)
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    otherIds: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      details: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('all_reports');
  },
};
