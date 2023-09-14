// user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Adjust the path based on your project structure
const { UUIDV4 } = require("sequelize");

const Community = sequelize.define('communities', {
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
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },


  image: {
    type: DataTypes.TEXT, // Storing JSON array
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('image');
      return rawValue ? JSON.parse(rawValue) : [];
    },
    set(value) {
      this.setDataValue('image', JSON.stringify(value));
    },
  },
  facbook_url: {
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
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  public: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  subCategory: {
    type: DataTypes.STRING,
    allowNull: true,
  },

});

Community.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = Community;