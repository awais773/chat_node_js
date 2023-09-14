"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("communities", {
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
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      details: {
        type: Sequelize.STRING,
        allowNull: true,
      },description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contact_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: true,
      },
  
      image: {
        type: Sequelize.TEXT, // Using TEXT to store JSON data
        allowNull: true,
        get() {
          const rawValue = this.getDataValue('image');
          return rawValue ? JSON.parse(rawValue) : [];
        },
        set(value) {
          this.setDataValue('image', JSON.stringify(value));
        },
      },
    
      facbook_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      website_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      youtube_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      other_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
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
   
      status: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      public: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      subCategory: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tags: {
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
    await queryInterface.dropTable("communities");
  },
};