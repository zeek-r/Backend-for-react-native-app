const Sequelize = require('sequelize');

const sequelize = require('../config/database');
const User = require('./user');

const Roles = sequelize.define('u_roles', {
			_uid : {
    		type : Sequelize.INTEGER
    	},
			type : {
        type : Sequelize.STRING,
        allowNull : false
      }
	}
);

Roles.belongsTo(User, {foreignKey: '_uid', targetKey: 'id'});

Roles.sync({force : true})
    .then(console.log('User Created Successfully'));
    
module.exports = Roles;
