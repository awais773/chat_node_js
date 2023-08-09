// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Adjust the path based on your project structure

const CompanyProfile = sequelize.define('company_profiles', {
 
  user_id: {
    type: DataTypes.INTEGER,
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
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  facebook_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  website_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  youtube_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  other_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  

});

CompanyProfile.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = CompanyProfile;