module.exports = (sequelize) => {
  const { dogs, temps, breeds, countries } = sequelize.models;

  temps.belongsToMany(dogs, { through: 'dogs_temps' });
  dogs.belongsToMany(temps, { through: 'dogs_temps' });

  breeds.belongsToMany(dogs, { through: 'dogs_breeds' });
  dogs.belongsToMany(breeds, { through: 'dogs_breeds' });

  countries.belongsToMany(dogs, { through: 'dogs_countries' });
  dogs.belongsToMany(countries, { through: 'dogs_countries' });
};
