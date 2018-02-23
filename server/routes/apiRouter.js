/**
 * Index Router File
 * Lists all the routes of the api
 */

const express = require('express');
const router = express.Router();
const path = require('path');
const appRoot = require('app-root-path');



/**
 *Individual files for different routes
 */
const authRouter = require('./authRouter'),
    userRouter = require('./userRouter'),
    authMiddleware = require('../middlware/auth');

/**
 * Registered Routes
 */

router.use('/dashboard/*', authMiddleware);
router.use('/auth', authRouter);
router.use('/dashboard/users', userRouter);

router.route('/').get(function(req, res) {
    res.sendFile(path.join(appRoot.path, 'public/index.html'));
});



module.exports = router;
