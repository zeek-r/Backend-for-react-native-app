const Details = require('../model/u_details'),
    Roles = require('../model/u_roles'),
    User = require('../model/user');

var userController = {
    index : function(req, res) {
        Details.findAll( 
            { 
                attributes : ['_uid','firstName', 'lastName', 'contact', 'organization', 'createdAt'],
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
        Details.findOne({
            attributes : ['_uid','firstName', 'lastName', 'contact', 'organization', 'createdAt'], 
            where : {
                id : req.body._uid
            },
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
    },
    deactivate : function(req, res) {
        res.json("user deactivated successfully");
    }
}

module.exports = userController;