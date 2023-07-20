"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("therapists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      firstName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      middleName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      serviceType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      DOB: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ssnNo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      hireDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      zip: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      homePhoneNo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      emgName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      emgEmail: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      relationship: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phoneNo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone_One: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone_Two: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      accountEmail: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      ProfessionalLicenseNo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      LicenseDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ExpDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      proExpDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      annualExpDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      annualSelfExpDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      annualFieldExpDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      annualtrainExpDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      document: {
        type: Sequelize.Sequelize.ARRAY(Sequelize.STRING),
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
    await queryInterface.dropTable("therapists");
  },
};
