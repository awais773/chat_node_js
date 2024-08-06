"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bank_details", {
     
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
      AccountName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      IBAN: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      SwiftCode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      AccountHolderName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      check_image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      card_image: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable("bank_details");
  },
};
