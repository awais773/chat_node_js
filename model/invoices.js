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
  company_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  invoice_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  
});

Invoice.belongsTo(User, {
  foreignKey: 'userId',
});
module.exports = Invoice;
