// user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { UUIDV4 } = require("sequelize");
const User = require("./User");

const Ledger = sequelize.define("ledgers", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },

  amount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  customerType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ledger_no: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  ledger_user_id: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  grandTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  goods: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  items: {
    type: DataTypes.ARRAY(DataTypes.JSON), 
    allowNull: true,
  },
});

Ledger.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = Ledger;
