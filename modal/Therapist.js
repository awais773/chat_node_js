const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Therapist = sequelize.define("therapists", {
  id: {
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,

  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  middleName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  serviceType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DOB: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ssnNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  hireDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  zip: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  homePhoneNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emgName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emgEmail: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  relationship: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phoneNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone_One: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone_Two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  accountEmail: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  ProfessionalLicenseNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  LicenseDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ExpDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  proExpDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  annualExpDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  annualSelfExpDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  annualFieldExpDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  annualtrainExpDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  careGiverRate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  document: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  assignPaitents: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});

module.exports = Therapist;
