// user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require('./User'); // Adjust the path based on your project structure
const { UUIDV4 } = require("sequelize");
const Like = require("./Like");

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
});

Querie.belongsTo(User, {
  foreignKey: 'userId',
});
Querie.hasOne(Like, { foreignKey: 'querieId' });

module.exports = Querie;
