const authHelper = require('../helpers/authHelper'),
    Roles = require('./u_roles'),
    Details = require('./u_details');

const dbInstantiator = function () {

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
}

module.exports = dbInstantiator;