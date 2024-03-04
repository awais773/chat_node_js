// user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require('./User'); // Adjust the path based on your project structure
const { UUIDV4 } = require("sequelize");

const Querie = sequelize.define("queries", {
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

  itemName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  itemCatgory: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  itemSubCatgory: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quanity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Ledger.belongsTo(User, {
//   foreignKey: 'userId',
// });

module.exports = Querie;
