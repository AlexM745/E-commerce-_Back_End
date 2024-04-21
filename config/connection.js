// impporting sequelize
const Sequelize = require('sequelize');
// imports dotenv module
require('./dotenv').config();
// constant for sequelize to use enviromental varibles from .env file
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
// exports constant sequelize.
module.exports = sequelize;
