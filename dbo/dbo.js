var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'oifurivn',
    'oifurivn',
    'pXjYG3225DZ-1Tjfy9lh8RiHi0GCJrcn',
    {
        host: 'raja.db.elephantsql.com',
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