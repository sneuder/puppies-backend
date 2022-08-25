const express = require('express');

// routes
const database = require('./routes/database');
const dogs = require('./routes/dogs')
const breeds = require('./routes/breeds');

const app = express();

// body-parser
app.use(express.json());

// adding routes
app.use('/api', database);
app.use('/api', dogs);
app.use('/api', breeds);

module.exports = app;