"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "bookings",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        address: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        startTime: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        endTime: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        date: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        addressType: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        serviceType: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        latitude: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        expiryTime: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        scheduleTime: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        uploadStatus: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        longitude: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        patientId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "patients",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        therapistId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "therapists",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("bookings");
  },
};
