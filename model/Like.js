// user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require('./User'); // Adjust the path based on your project structure
const { UUIDV4 } = require("sequelize");
const Community = require("./Community");
const Querie = require("./Querie");

const Like = sequelize.define("likes", {
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

  communityId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: Community, // Reference the User model
      key: 'id', // Reference the primary key of the User model
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },

  
  querieId: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: Querie, // Reference the User model
      key: 'id', // Reference the primary key of the User model
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },

  likes: {
    type: DataTypes.STRING,
    allowNull: true,
  }




});

// Ledger.belongsTo(User, {
//   foreignKey: 'userId',
// });

module.exports = Like;
