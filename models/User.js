var Sequelize = require('sequelize');
var sequelize = require('../dbo/dbo');

var Registration = require('./Registration');

class User extends Sequelize.Model {}

User.init({
    email: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        required: true
    },
    usrname: {
        type: Sequelize.STRING(15),
        primaryKey: true,
        required: true
    },
    password: {
        type: Sequelize.STRING(15),
        required: true
    },
    committee: {
        type: Sequelize.ENUM,
        values: ['Académico social', 'Marketing', 'Regulador', 'Relaciones Públicas', 'Técnico'],
    },
    phone: {
        type: Sequelize.STRING(8),
        required: true
    },
    gender: {
        type: Sequelize.STRING(1),
        required: true
    },
    usrtype: {
        type: Sequelize.ENUM,
        values: ['ADMIN', 'NORMAL', 'PREU'],
        required: true
    },
    fullname: {
        type: Sequelize.STRING(100),
        required: true
    }
}, {sequelize, modelName: 'usr', timestamps: false, freezeTableName: true})

User.hasMany(Registration);
Registration.belongsTo(User);

module.exports = User;