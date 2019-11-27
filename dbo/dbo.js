var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'ceiiuca',
    'postgres',
    'admin',
    {
        host: 'localhost',
        dialect: 'postgresql',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)

module.exports = sequelize;