'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('queries', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users", // The name of the referenced table (users)
          key: "id", // The name of the referenced column (id)
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      itemName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      itemCatgory: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      itemSubCatgory: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      quanity: {
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
    await queryInterface.dropTable('queries');
  },
};
