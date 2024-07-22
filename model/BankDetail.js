// user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require('./User'); // Adjust the path based on your project structure
const { UUIDV4 } = require("sequelize");

const BankDetail = sequelize.define("bank_details", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  AccountName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  IBAN: {
    type: DataTypes.STRING,
    allowNull: true
  },
  SwiftCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  AccountHolderName: {
    type: DataTypes.STRING,
    allowNull: true
  },
 
  userId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: User, // Reference the User model
      key: 'id', // Reference the primary key of the User model
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
});

module.exports = BankDetail;
