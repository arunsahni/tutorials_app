var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function(app, config){
    function compile(str, path){
        return stylus(str).set('filename',path);
    }

    app.set('views',config.rootPath + '/server-side/views');
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser());
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(stylus.middleware(
        {
            src: config.rootPath + '/client-side',
            compile: compile
        }
    ));

    app.use(express.static(config.rootPath + '/client-side'));
};

