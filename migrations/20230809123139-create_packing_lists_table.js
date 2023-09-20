"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("packing_lists", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      item_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      item_qty_per_carton: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      qty_of_carton: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      net_weight_carton: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gross_weight_carton: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      net_total_weight_carton: { // Corrected column name
        type: Sequelize.STRING,
        allowNull: true,
      },
      gross_total_weight_carton: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      height: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      width: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      length: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      per_carton_cbm: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      total_carton_cbm: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      net_weight: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gross_weight: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      totalItemsQty: {
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
    await queryInterface.dropTable("packing_lists");
  },
};
