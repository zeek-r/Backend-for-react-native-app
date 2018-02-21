const Sequelize = require('sequelize');

const sequelize = require('../config/database');
const User = require('./user');

const Details = sequelize.define('u_detail', {
			contact : {
      	type: Sequelize.BIGINT,
        allowNull : false
      },
    	_uid : {
    		type : Sequelize.INTEGER
    	},
    	firstName : {
        type : Sequelize.STRING,
        allowNull : false
      },

      lastName : {
        type : Sequelize.STRING,
        allowNull : false
      },	
      organization : {
            type : Sequelize.STRING,
            allowNull : false
      },		
	}
);

Details.belongsTo(User, {foreignKey: '_uid', targetKey: 'id'});

Details.sync({force : true})
    .then(() => {
      Details.findOrCreate({
        where : {
          _uid : 1
        },
        defaults : {
          contact : 9848828053,
          firstName : 'Roshan',
          lastName : 'Bista',
          organization : 'React Native App'
        }
      }).then(console.log('User Details Created Successfully'))
    });
    
module.exports = Details
