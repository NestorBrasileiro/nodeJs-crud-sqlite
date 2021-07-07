
require('dotenv').config();
const Sequelize = require('sequelize');

const DB_FILEPATH = process.env.DB_FILEPATH
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_TYPE = process.env.DB_TYPE;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS,{
    dialect: DB_TYPE,
    host: DB_FILEPATH
})

module.exports = sequelize;
