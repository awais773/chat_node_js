const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Booking = require("./booking");
const { UUIDV4 } = require("sequelize");

const Invoice = sequelize.define("invoices", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Invoice.belongsTo(Booking);
Booking.hasMany(Invoice);

module.exports = Invoice;
