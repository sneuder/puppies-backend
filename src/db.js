const { forEach } = require('lodash');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('puppies', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

// linking modoles to database
const requireModels = ['Dogs', 'Temps', 'Countries', 'Breeds', 'BredsFor'];
requireModels.forEach(requireModel => {
  const model = require(`./models/${requireModel}`);
  model(sequelize);
});

module.exports = sequelize;