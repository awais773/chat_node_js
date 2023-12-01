// user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { UUIDV4 } = require("sequelize");

const priceList = sequelize.define("pricelists", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = priceList;
