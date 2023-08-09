// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { UUIDV4 } = require("sequelize");

const User = sequelize.define('users', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  DOB: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fireBaseId: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Enable timestamps
  timestamps: true
});

module.exports = User;
