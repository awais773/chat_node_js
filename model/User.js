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
  businessName: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  DOB: {
    type: DataTypes.STRING,
    allowNull: true
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true

  },
  fireBaseId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  deviceToken: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true
  },
  blockedStatus: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  // Enable timestamps
  timestamps: true
});

module.exports = User;
