const associationsPuppies = require('./models/associations/index');
const { Sequelize } = require('sequelize');

require('dotenv').config();
const { HOST, DBNAME, USERDB, PASSWORDB } = process.env;

const sequelize = new Sequelize(DBNAME, USERDB, PASSWORDB, {
  host: HOST,
  dialect: 'postgres',
  logging: false,
});

// linking models to database
const requireModels = ['Dogs', 'Temps', 'Countries', 'Breeds', 'BredsFor'];
requireModels.forEach((requiredModel) => {
  const model = require(`./models/${requiredModel}`);
  model(sequelize);
});

// associations
associationsPuppies(sequelize);

module.exports = sequelize;
