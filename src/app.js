const express = require('express');
const cors = require('cors');

// get routes
const newUser = require('./routes/newUser');
const database = require('./routes/database');
const dogs = require('./routes/dogs');
const breeds = require('./routes/breeds');
const temps = require('./routes/temps');
const countries = require('./routes/countries');

// adding routes
const addRoutes = (app) => {
  const router = express.Router();

  app.use(cors());
  app.use(express.json());

  app.use('/api/v1', router);

  router.use('/', newUser);
  router.use('/', database);
  router.use('/', dogs);
  router.use('/', breeds);
  router.use('/', temps);
  router.use('/', countries);
};

module.exports = addRoutes;
