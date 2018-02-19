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
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');

/**
 * Registered Routes
 */

router.use('/auth', authRouter);
router.use('/users', userRouter);

router.route('/').get(function(req, res) {
    res.sendFile(path.join(appRoot.path, 'src/index.html'));
});



module.exports = router;
