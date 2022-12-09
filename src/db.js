const associationsPuppies = require('./models/associations/index');
const { Sequelize } = require('sequelize');

require('dotenv').config();
const { URL_DB } = process.env;

const sequelize = new Sequelize(URL_DB, {
  logging: false,
});

// const sequelize = new Sequelize(DBNAME, USERDB, PASSWORDB, {
//   host: HOST,
//   dialect: 'postgres',
//   logging: false,
// });

// linking models to database
const requireModels = ['Dogs', 'Temps', 'Countries', 'Breeds'];
requireModels.forEach((requiredModel) => {
  const model = require(`./models/${requiredModel}`);
  model(sequelize);
});

// associations
associationsPuppies(sequelize);

module.exports = sequelize;
