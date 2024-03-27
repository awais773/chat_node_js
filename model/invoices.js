// user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { UUIDV4 } = require("sequelize");
const User = require("./User");

const Invoice = sequelize.define("invoices_Lists", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  products: {
    type: DataTypes.ARRAY(DataTypes.JSON), 
    allowNull: true,
  },
  invoice_user_id: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  unit_amount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  discount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  discount_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  qty: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  item: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  item_no: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  total_amount: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  total: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  
});

Invoice.belongsTo(User, {
  foreignKey: 'userId',
});
module.exports = Invoice;
