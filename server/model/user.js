var Sequelize = require('sequelize');

var sequelize = require('../config/database');

var User = sequelize.define('user', {
        id : {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        
        email : {
            type : Sequelize.STRING,
            validate : {
                isEmail : true
            },
            allowNull : false,
            unique : true
        },

        password : {
            type : Sequelize.STRING,
            allowNull : false
        },
        status : {
            type : Sequelize.ENUM('active', 'inactive'),
            defaultValue : 'inactive'
        }
    },
);

User.sync({force : false})
    .then(console.log('User Created Successfully'));


module.exports = User;
