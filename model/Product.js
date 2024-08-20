// user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require('./Company'); // Adjust the path based on your project structure
const { UUIDV4 } = require("sequelize");

const Product = sequelize.define("products", {
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
  barcode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  print: {
    type: DataTypes.STRING,
    allowNull: true
  },
  companyId: {
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

module.exports = Product;
