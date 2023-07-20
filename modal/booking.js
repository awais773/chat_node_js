
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Patient = require("./Patient"); // Assuming you have already defined the Patient model
const Therapist = require("./Therapist");

const Booking = sequelize.define('bookings', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  addressType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  serviceType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  expiryTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  scheduleTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  startTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  endTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  uploadStatus: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  therapistId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },


}, {
  timestamps: false
});
Booking.belongsTo(Patient); // Add foreign key to Patient model
Patient.hasMany(Booking); // Add one-to-many association between Patient and Booking

Booking.belongsTo(Therapist); // Add foreign key to Therapist model
Therapist.hasMany(Booking); // Add one-to-many association between Therapist and Invoice

module.exports = Booking;
