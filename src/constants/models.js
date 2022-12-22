const sequelize = require('../db');

module.exports = {
  Temperament: sequelize.models.temps,
  breed_group: sequelize.models.breeds,
  countries: sequelize.models.countries,
};
