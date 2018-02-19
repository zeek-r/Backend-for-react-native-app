var config = require('./config');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(config.db, config.dbUser, config.dbPass, {
    host : config.dbHost,
    dialect : config.dbDialect,

    pool : {
        max : 10,
        min : 0
    }
});

module.exports = sequelize;

