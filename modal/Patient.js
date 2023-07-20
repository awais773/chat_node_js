const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Patient = sequelize.define("patients", {
  // id: {
  //   allowNull: true,
  //   autoIncrement: true,
  //   primaryKey: true,
  //   type: DataTypes.INTEGER,
  // },
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
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  expirytime: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  scheduletime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  uploadstatus: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  addressType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  careDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  certificationPeriod: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  serviceType: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  country: {
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
  phoneNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phoneP_Two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address_Two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  addressType_Two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  country_Two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state_Two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city_Two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  zip_Two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DOB: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  applicationId: {
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
  phone_Three: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  relation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  latitude_Two: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  longitude_Two: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  insurance: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  agency: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  coordinator: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  OT: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PT: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ST: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  document: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Patient;
