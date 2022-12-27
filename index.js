require('dotenv').config();
const app = require('express')();

// add the routes and make their settings
const addRoutes = require('./src/app');
addRoutes(app);

const sequelize = require('./src/db');

// axios configuration
const axiosConfig = require('./src/utils/axiosConfig');
axiosConfig();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server listening'));
// sequelize.sync().catch((e) => console.log(e));
sequelize.sync({ force: true }).catch((e) => console.log(e));
