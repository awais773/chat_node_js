"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("define_items", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      unit_amount: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      discount: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      discount_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      qty: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      item: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      item_no: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      total_amount: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      total: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users", // The name of the referenced table (users)
          key: "id", // The name of the referenced column (id)
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("define_items");
  },
};
