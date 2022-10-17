const message = require("../utils/messages");
const sequelize = require("../db");

const Dogs = sequelize.models.dogs;
const setAssociations = require("./utils/setAssociations");
const attrModels = require("../constants/models");

const postDatabase = async (dog) => {
  try {
    const postedDog = await Dogs.create(dog.formatedDog);

    setAssociations.temps(postedDog, dog.attributes.temperament);
    setAssociations.breeds(postedDog, dog.attributes.breed_group);
    setAssociations.bredsfor(postedDog, dog.attributes.bred_for);
    setAssociations.countries(postedDog, dog.attributes.origin);

    return postedDog;
  } catch (e) {
    return message.error;
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
  postDatabase,
  deleteDatabase,
};
