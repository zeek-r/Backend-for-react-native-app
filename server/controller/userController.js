const Details = require('../model/u_details');
const Roles = require('../model/u_roles');

var userController = {
    index : function(req, res) {
        User.findAll( 
            { 
                attributes : ['firstName', 'lastName', 'email', 'contact', 'organization', 'createdAt', 'status', 'type'] 
            } 
        ).then(users => {
            const response = {
                data : users,
                message : "All user data loaded successfully"
            }
            res.json(response);
        });
    },

    update : function(req, res) {
        res.json("user profile displayed");
    },
    user : function(req, res) {
        User.findOne({
            attributes : ['id','firstName', 'lastName', 'email', 'contact', 'organization', 'createdAt', 'status', 'type'], 
            where : {
                id : req.body._uid
            }
        }).then(user => {
            const response = {
                data : user,
                message : "User data loaded successfully"
            }
            res.json(response);
        });
    },
    activate :  function(req, res) {
        res.json("user activated successfully");
    }
}

module.exports = userController;