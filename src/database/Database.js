const sequelize = require('../db');

const Dogs = sequelize.models.dogs;
const attrModels = require('../constants/models');
const setAssociations = require('./utils/setAssociations');

const postDatabase = async (dog) => {
  const postedDog = await Dogs.create(dog.formatedDog);
  // make associations
  const attributes = ['temperaments', 'breeds', 'countries'];
  for (let i = 0; i < attributes.length; i++) {
    if (dog.attributes[attributes[i]]) {
      await setAssociations[attributes[i]](
        postedDog,
        dog.attributes[attributes[i]]
      );
    }
  }
};

const getDatabase = async () => {
  const allDogs = await Dogs.findAll({ include: Object.values(attrModels) });
  return allDogs;
};

// destroy all data in each table
const deleteDatabase = async () => {
  try {
    await Dogs.destroy({ truncate: true, cascade: true });
  } catch (e) {
    throw new Error(e);
  }

  const attrKeys = Object.keys(attrModels);
  attrKeys.forEach(async (attrKey) => {
    try {
      await attrModels[attrKey].destroy({ truncate: true, cascade: true });
    } catch (e) {
      throw new Error(e);
    }
  });
};

module.exports = {
  getDatabase,
  postDatabase,
  deleteDatabase,
};
