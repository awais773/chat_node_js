// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { UUIDV4 } = require("sequelize");

const Ledger = sequelize.define('ledgers', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
 
  amount: {
    type: DataTypes.STRING,
    allowNull: true
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  customerType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: true,
  },

});



module.exports = Ledger;