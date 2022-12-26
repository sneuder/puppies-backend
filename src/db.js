const associationsPuppies = require('./models/database/associations/index');
const { Sequelize } = require('sequelize');

require('dotenv').config();
const { URL_DB } = process.env;

const sequelize = new Sequelize(URL_DB, {
  logging: false,
});

// linking models to database
const requireModels = ['Dogs', 'Temps', 'Countries', 'Breeds'];
requireModels.forEach((requiredModel) => {
  const model = require(`./models/database/${requiredModel}`);
  model(sequelize);
});

// associations
associationsPuppies(sequelize);

module.exports = sequelize;
