// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Adjust the path based on your project structure
const { UUIDV4 } = require("sequelize");

const DefineItem = sequelize.define('define_items', {
 
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
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  unit_amount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  discount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  discount_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  qty: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  item: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  item_no: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  total_amount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  total: {
    type: DataTypes.STRING,
    allowNull: true,
  },
 
});

DefineItem.belongsTo(User, {
  foreignKey: 'user_id',
});


DefineItem.generateItemNo = async function() {
  // Fetch the maximum item_no from the database
  const maxItem = await DefineItem.max('item_no');  
  let newItemNo = '001';  
  if (maxItem) {
    const maxNumber = parseInt(maxItem, 10);
    newItemNo = (maxNumber + 1).toString().padStart(3, '0'); 
  }
  
  return newItemNo;
};

module.exports = DefineItem;