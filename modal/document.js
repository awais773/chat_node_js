const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Image = sequelize.define('documents', {
  url: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  checkInTime: {
    type: DataTypes.STRING,
    allowNull: true
  },
  checkOutTime: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  therapistid: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userid: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  addressType: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bookingId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  feedback: {
    type: DataTypes.STRING,
    allowNull: true
  },
  date: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  timestamps: true,
  tableName: 'documents'
});
module.exports = Image;