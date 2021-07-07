const database = require('../database/db');
const Sequelize = require('sequelize')

const User = database.define('User', {
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
        required: true
    },
    email: {
        type: Sequelize.STRING(70),
        allowNull: false,
        required:true,
        unique: true
    },
    idade: {
        type: Sequelize.NUMBER,
        allowNull: false,
        minimum: 18,
        required: true
    }    
});

module.exports = User;
