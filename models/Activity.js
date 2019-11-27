var Sequelize = require('sequelize');
var sequelize = require('../dbo/dbo');

class Activity extends Sequelize.Model {}

Activity.init({
    idact: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    actname: {
        type: Sequelize.STRING(100),
        required: true
    },
    acttype: {
        type: Sequelize.ENUM,
        values: ['Reunión', 'Charla', 'Curso', 'Taller', 'Torneo'],
        required: true
    },
    actlocation: {
        type: Sequelize.STRING(100)
    },
    actdesc: {
        type: Sequelize.STRING,
        required: true
    },
    actdate: {
        type: Sequelize.DATE,
        required: true
    },
    actroom: {
        type: Sequelize.INTEGER,
        required: true
    },
    done: {
        type: Sequelize.BOOLEAN,
        required: true
    }
}, {sequelize, modelName: 'activity', timestamps: false, freezeTableName: true})

module.exports = Activity;