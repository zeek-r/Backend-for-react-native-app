const bcrypt = require('bcrypt');
const config = require('../config/config');
const hashRounds = 10;
const authHelper = {
    generateHash : function(password) {
        return bcrypt.hashSync(password, hashRounds);
    },
    compare : function(password, encrypted) {
        return bcrypt.compareSync(password, encrypted);
    },
}
module.exports = authHelper;
