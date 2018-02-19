/**
 * Router for controlling authentication requests
 * 
 */

var express = require('express');
var authRouter = express.Router();
var authController = require('../controller/authController');

/**
 * Route for registration
 * 
 */
authRouter.route('/register')
    .post(authController.register);
    
/**
 * Route for login
 * 
 */
authRouter.route('/login')
    .post(authController.login);

authRouter.route('/isauthenticated')
    .post(authController.verify);
module.exports = authRouter;