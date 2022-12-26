const sequelize = require('../db');

module.exports = {
  Temps: sequelize.models.temps,
  Breeds: sequelize.models.breeds,
  Countries: sequelize.models.countries,
};
