// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Adjust the path based on your project structure
const { UUIDV4 } = require("sequelize");
const Community = require('./Community');

const AllReport = sequelize.define('all_reports', {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
  reportedBy: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: User, // Reference the User model
      key: 'id', // Reference the primary key of the User model
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  reportedTo: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: User, // Reference the User model
      key: 'id', // Reference the primary key of the User model
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  otherIds: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },



});

AllReport.belongsTo(User, {
  foreignKey: 'reportedBy',
  as: 'reportedByUser'  // Unique alias
});

AllReport.belongsTo(User, {
  foreignKey: 'reportedTo',
  as: 'reportedToUser'  // Unique alias
});

AllReport.belongsTo(Community, {
  foreignKey: 'otherIds',
  as: 'Community'
});


module.exports = AllReport;