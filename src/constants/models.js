const sequelize = require("../db");

module.exports = {
  temperament: sequelize.models.temps,
  breed_group: sequelize.models.breeds,
  bred_for: sequelize.models.bredsfors,
  origin: sequelize.models.countries,
};
