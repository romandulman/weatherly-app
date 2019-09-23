/// For Live Demo purposes only
// This Node server runs only static React build files - not backend logic !

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

module.exports = app;
