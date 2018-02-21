const Sequelize = require('sequelize');

const sequelize = require('../config/database');
const User = require('./user');

const Roles = sequelize.define('u_roles', 
	{
			_uid : {
				type : Sequelize.INTEGER,
				references : {
					key : 'id',
					model : 'users'
				}
    	},
			type : {
				type : Sequelize.ENUM('admin', 'user'),
        defaultValue : 'user'
      }
	},
);

module.exports = Roles;
