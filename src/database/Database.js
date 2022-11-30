const message = require('../utils/messages');
const sequelize = require('../db');

const Dogs = sequelize.models.dogs;
const attrModels = require('../constants/models');
const setAssociations = require('./utils/setAssociations');

const postDatabase = async (dog) => {
  try {
    const postedDog = await Dogs.create(dog.formatedDog);

    // make associations
    const attributes = ['temperaments', 'breeds', 'countries'];
    attributes.forEach(async (attribute) => {
      if (dog.attributes[attribute])
        setAssociations[attribute](postedDog, dog.attributes[attribute]);
    });
  } catch (e) {
    return message.error;
  }
};

const getDatabase = async () => {
  try {
    return await Dogs.findAll({ include: Object.values(attrModels) });
  } catch (e) {
    console.log(e);
  }
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
