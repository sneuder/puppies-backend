const express = require('express');

// routes
const database = require('./routes/database');
const dogs = require('./routes/dogs')
const breeds = require('./routes/breeds');

const app = express();

// adding routes
app.use('/api', database);
app.use('/api', dogs);

module.exports = app;