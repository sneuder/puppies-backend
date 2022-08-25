const sequelize = require('../db');
const formating = require('../utils/formatting');

const Dogs = sequelize.models.dogs;
const attributes = {
  'temperament': sequelize.models.temps,
  'breed_group': sequelize.models.breeds,
  'bred_for': sequelize.models.bredsfors,
  'origin': sequelize.models.countries
};

// Delete de data base and then populate it
const postDatabase = async (dogs) => {
  return await Dogs.bulkCreate(dogs);
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
  postDatabaseAttributes,
  deleteDatabase 
};