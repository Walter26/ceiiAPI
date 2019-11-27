var Sequelize = require('sequelize');
var sequelize = require('../dbo/dbo');

class Registration extends Sequelize.Model {}

Registration.init({
    idregistration: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    regdate: {
        type: Sequelize.DATE,
        required: true
    },
    regemail: {
        type:Sequelize.STRING(25),
        required: true
    },
    reguser: {
        type: Sequelize.STRING(25),
        required: true
    },
    idact: {
        type: Sequelize.INTEGER
    }
}, {sequelize, modelName: 'registration', timestamps: false, freezeTableName: true})

module.exports = Registration;