// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Adjust the path based on your project structure
const { UUIDV4 } = require("sequelize");

const PackingList = sequelize.define('packing_lists', {
 
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
  
  user_id: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: User, // Reference the User model
      key: 'id', // Reference the primary key of the User model
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  item_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  item_qty_per_carton: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  qty_of_carton: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  net_weight_carton: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  net_total_weight_carton: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gross_weight_carton: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gross_total_weight_carton: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  height: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  width: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  length: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  per_carton_cbm: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  total_carton_cbm: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  net_weight: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  
  gross_weight: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  totalItemsQty: {
    type: DataTypes.STRING,
    allowNull: true,
  },

});

PackingList.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = PackingList;