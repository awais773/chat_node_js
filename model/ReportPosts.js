// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Adjust the path based on your project structure
const { UUIDV4 } = require("sequelize");
const Community = require('./Community');

const ReportPosts = sequelize.define('reportPosts', {
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
  communityID: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: Community, // Reference the User model
      key: 'id', // Reference the primary key of the User model
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  details: {
    type: DataTypes.STRING,
    allowNull: true,
  },



});

ReportPosts.belongsTo(User, {
  foreignKey: 'reportedBy',
});
ReportPosts.belongsTo(Community, {
  foreignKey: 'communityID',
});


module.exports = ReportPosts;