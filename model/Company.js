// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');
const { UUIDV4 } = require("sequelize");

const Company = sequelize.define('companies', {
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  // Enable timestamps
  timestamps: true,
  // defaultScope: {
  //   attributes: { exclude: ['fireBaseId',] }
  // },
});
Company.prototype.comparePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
  };

module.exports = Company;
