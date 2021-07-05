const database = require('../database/db');
const Sequelize = require('sequelize')

const User = database.define('User', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(70),
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }    
});

module.exports = User;
