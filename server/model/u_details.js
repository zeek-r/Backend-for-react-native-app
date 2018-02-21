const Sequelize = require('sequelize');

const sequelize = require('../config/database');
const User = require('./user');

const Details = sequelize.define('u_detail', 
  {
			contact : {
      	type: Sequelize.BIGINT,
        allowNull : false
      },
    	_uid : {
        type : Sequelize.INTEGER,
        references : {
          key : 'id',
          model : 'users'
        }
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

module.exports = Details;
