var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    app = express(),
    config = require('./server-side/config/config')[env];

require('./server-side/config/express')(app,config);
require('./server-side/config/routes')(app);

app.listen(config.port);
console.log("Listening port", config.port);

