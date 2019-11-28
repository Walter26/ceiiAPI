var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'oifurivn',
    'oifurivn',
    'pXjYG3225DZ-1Tjfy9lh8RiHi0GCJrcn',
    {
        host: 'http://raja.db.elephantsql.com',
        dialect: 'postgresql',
        dialectOption: {
            ssl: true,
            native: true
        },
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