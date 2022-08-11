const sequelize = require('../db');
const formating = require('../utils/formatting');

const Dogs = sequelize.models.dogs;
const Temps = sequelize.models.temps;
const Breeds = sequelize.models.breeds;
const BredsFor = sequelize.models.bredsfors;
const Countries = sequelize.models.countries;

// Attributes to save
const attributes = {
  'temperament': Temps,
  'breed_group': Breeds,
  'bred_for': BredsFor,
  'origin': Countries
};

// Delete de data base and then populate it
const postDatabase = async (dogs) => {
  deleteDatabase();
  postDatabaseAttributes(dogs);

  const formatedDogs = formating.postDogs(dogs);
  return await Dogs.bulkCreate(formatedDogs);
};

// Add all information in common related to dogs
const postDatabaseAttributes = (dogs) => {
  const attrKeys = Object.keys(attributes);
  attrKeys.forEach(async attrKey => {
    try {
      const formatedAttributes = formating.postAttributes(dogs, attrKey);
      await attributes[attrKey].bulkCreate(formatedAttributes);
    } catch (e) {console.log(e)}
  });
};

// destroy all data in each table
const deleteDatabase = async () => {
  await Dogs.destroy({truncate: true});

  const attrKeys = Object.keys(attributes);
  attrKeys.forEach(async attrKey => {
    await attributes[attrKey].destroy({truncate: true});
  });
};

module.exports = {
  postDatabase,
  deleteDatabase 
};