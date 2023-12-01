// user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { UUIDV4 } = require("sequelize");

const Invoice = sequelize.define("invoices", {
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
  subtitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Invoice;
