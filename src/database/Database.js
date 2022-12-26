const sequelize = require('../db');

const Dogs = sequelize.models.dogs;
const attrModels = require('../constants/models');
const setAssociations = require('./utils/setAssociations');

const postDatabase = async (dog) => {
  try {
    const postedDog = await Dogs.create(dog);
    // make associations
    const attributes = Object.keys(dog.attributes);
    for (let i = 0; i < attributes.length; i++) {
      await setAssociations[attributes[i]](
        postedDog,
        dog.attributes[attributes[i]]
      );
    }
  } catch (e) {
    throw new Error(e);
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
