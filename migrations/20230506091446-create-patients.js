("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("patients", {
      id: {
        allowNull: true,
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

      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      expirytime: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      scheduletime: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      uploadstatus: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      addressType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      careDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      certificationPeriod: {
        type: Sequelize.Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      serviceType: {
        type: Sequelize.Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      gender: {
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
      country: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phoneNo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phoneP_Two: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address_Two: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      addressType_Two: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      country_Two: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      state_Two: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      city_Two: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      zip_Two: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      applicationId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      DOB: {
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
      phone_Three: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      relation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("patients");
  },
};
