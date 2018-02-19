// Server Configuration 
var app = require('./server/config/express');
var config = require('./server/config/config');


app.listen(config.port, function(err) {
    console.log('server started on ' + config.port);
});
