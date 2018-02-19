var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    appRoot = require('app-root-path'),
    path = require('path'),
    ejs = require('ejs'),
    cors = require('cors');
    
var app = express();
var config = require('./config');

// Routes all the incoming requests
var router = require('../routes/apiRouter');

// Not final templating engine, may change in future
app.set("view engine", "ejs");
app.set('views', 'src');
app.use(express.static('src'));
app.use(cors());

// Morgan logger for logging every request to terminal
app.use(logger('dev'));

// For parsing forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Handles all the incoming routes
app.use('/', router);


app.get('*', function(req, res){
    res.sendFile(path.join(appRoot.path, 'src/index.html'));
});

module.exports = app;