const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

const tokenDecoder =  {
    decode : function(token){
        return jwt.decode(token);
    },

    getUid : function(token) {
        return jwt.decode(token)._uid;
    },

    getUtype : function(token) {
        return jwt.decode(token).type;
    },
    verify : function(token) {
        const decoded = jwt.verify(token, config.secret);
        if(decoded.status === 'active') {
            return true;
        }
        return false;
    },
    sign : function(payload) {
        return jwt.sign(payload, config.secret, {expiresIn : "7 days"});
    }
}

module.exports = tokenDecoder;