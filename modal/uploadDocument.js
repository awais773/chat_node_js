const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const uploadFile = sequelize.define('uploadDocument', {
  url: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
 
}, {
  timestamps: true,
  tableName: 'uploadDocument'
});
module.exports = uploadFile;