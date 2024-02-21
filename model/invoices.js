// user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { UUIDV4 } = require("sequelize");

const Invoice = sequelize.define("invoices_Lists", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
  userId: {
    type: DataTypes.STRING, 
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
  
});

module.exports = Invoice;
