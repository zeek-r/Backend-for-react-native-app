const Details = require('../model/u_details');
const Roles = require('../model/u_roles');

var userController = {
    index : function(req, res) {
        res.json("user indexed successfully");
    },

    update : function(req, res) {
        res.json("user profile displayed");
    },
    user : function(req, res) {
        res.json("user returned successfully");
    },
    activate :  function(req, res) {
        res.json("user activated successfully");
    }
}

module.exports = userController;