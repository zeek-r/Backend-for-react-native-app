const Sequelize = require('sequelize'),
		authHelper = require('../helpers/authHelper'),
		sequelize = require('../config/database'),
		instantiator = require('./index');

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
});

User.sync({force : false})
  .then(() => {
			User.findOrCreate({
					where : {
							id : 1
					},
					defaults : {
							email : 'r@r.com',
							password : authHelper.generateHash('react-native@pp'),
							status : 'active'
					} 
			}).then(() => {
				instantiator();
				console.log('User Created Successfully')
			});
});

module.exports = User;
