const sequelize = require('../db');

module.exports = {
  temperament: sequelize.models.temps,
  breed_group: sequelize.models.breeds,
  countries: sequelize.models.countries,
};
