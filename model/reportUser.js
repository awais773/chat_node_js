// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Adjust the path based on your project structure
const { UUIDV4 } = require("sequelize");

const reportUser = sequelize.define('reportUsers', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
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
  reciver: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: User, // Reference the User model
      key: 'id', // Reference the primary key of the User model
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  detail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

reportUser.belongsTo(User, {
  foreignKey: 'userId',
  as: 'UserSender', // You can add an alias to differentiate between the two relationships
});

reportUser.belongsTo(User, {
  foreignKey: 'reciver',
  as: 'UserReceiver', // Alias for the second relationship
});


module.exports = reportUser;