module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("documents", {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      url: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
      },
      checkInTime: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      checkOutTime: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      addressType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      therapistid: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      userid: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bookingId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      feedback: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("documents");
  },
};
