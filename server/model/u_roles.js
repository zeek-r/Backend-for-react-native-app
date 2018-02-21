const Sequelize = require('sequelize');

const sequelize = require('../config/database');
const User = require('./user');

const Roles = sequelize.define('u_roles', {
			_uid : {
    		type : Sequelize.INTEGER
    	},
			type : {
				type : Sequelize.ENUM('admin', 'user'),
        defaultValue : 'user'
      }
	}
);

Roles.belongsTo(User, {foreignKey: '_uid', targetKey: 'id'});

Roles.sync({force : false})
    .then(() => {
		Roles.findOrCreate({
      where : {
        _uid : 1
			},
			defaults : {
				type : 'admin'
			}
		}).then(console.log('Roles Created Successfully'));
	});
    
module.exports = Roles;
