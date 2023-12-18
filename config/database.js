const Sequelize = require('sequelize');
require('dotenv').config();

console.log("hello", process.env.HOST);
const sequelize = new Sequelize(process.env.databaseName, process.env.DbUsername, process.env.DbUserPassword, {
  host: process.env.HOST,
  dialect: 'postgres',
});
sequelize.authenticate()
  .then(() => {
    console.log('DB Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;