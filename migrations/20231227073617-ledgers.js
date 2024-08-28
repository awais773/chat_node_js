"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ledgers", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      amount: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      remarks: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      customerType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      grandTotal: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      goods: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      ledger_user_id: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      items: {
        type: Sequelize.ARRAY(Sequelize.JSON),
        allowNull: true,
      },
      ledger_no: {
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
    await queryInterface.dropTable("ledgers");
  },
};