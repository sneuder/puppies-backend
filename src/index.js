const express = require('express');
const axiosConfig = require('./utils/axiosConfig');

// axios configuration
axiosConfig();

// routes
const database = require('./routes/database');
const dogs = require('./routes/dogs')
const breeds = require('./routes/breeds');

const app = express();
const PORT = process.env.PORT || 3000;

// adding routes
app.use('/api', database);
app.use('/api', dogs);

app.listen(PORT, () => console.log('Server listening'));