module.exports = (sequelize) => {
  const { dogs, temps, breeds, bredsfors, countries } = sequelize.models;

  temps.belongsToMany(dogs, { through: "dogs_temps" });
  dogs.belongsToMany(temps, { through: "dogs_temps" });

  breeds.belongsToMany(dogs, { through: "dogs_breeds" });
  dogs.belongsToMany(breeds, { through: "dogs_breeds" });

  bredsfors.belongsToMany(dogs, { through: "dogs_bredsfor" });
  dogs.belongsToMany(bredsfors, { through: "dogs_bredsfor" });

  countries.belongsToMany(dogs, { through: "dogs_countries" });
  dogs.belongsToMany(countries, { through: "dogs_countries" });
};
