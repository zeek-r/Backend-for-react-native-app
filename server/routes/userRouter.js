var express = require('express');
var userRouter = express.Router();
var userController = require('../controller/userController');

userRouter.route('/')
    .get(userController.index);

userRouter.route('/profile/')
    .get(userController.user);

userRouter.route('/:_id')
    .put(userController.update);

userRouter.route('/activate/:_uid')
    .get(userController.activate);

module.exports = userRouter;

