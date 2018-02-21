var jwt = require('jsonwebtoken');
var config = require('../config/config.js');
var tokenHelper = require('../helpers/tokenHelper');


var authWare = function(req, res, next) {
    var token = req.get("Authorization");
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) {
            res.status(403);
            res.json(err);
        }
        else {
            req.body._uid = tokenHelper.getUid(req.get("Authorization"));
            next();
        }
    });
}

module.exports = authWare;