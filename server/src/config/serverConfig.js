const express = require('express');
const path = require('path');
const morgan = require('morgan');
const removeHTTPHeader = require('../middleware/removeHeader');
const getGreetings = require('../middleware/locals');
const indexRouter = require('../routes/index.router');

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true })); 
  app.use(express.json());
  app.use(morgan('dev'));


  app.use(removeHTTPHeader);


    
  app.use(getGreetings) // удалить

  app.use('/api/v1.0', indexRouter)



};

module.exports = serverConfig;
