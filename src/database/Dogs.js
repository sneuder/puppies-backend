const message = require('../utils/messages');
const sequelize = require('../db');

const Dogs = sequelize.models.dogs;
const attrModels = Object.values(require('../constants/models'));

// const { Op } = require('sequelize');

const getAllDogs = async (searchConditions) => {
  try {
    const count = await Dogs.count(searchConditions);
    const dogs = await Dogs.findAll(searchConditions);
    for (const dog of dogs) dog.dataValues.temps = await dog.getTemps();

    return {
      count: count,
      row: dogs,
    };
  } catch (e) {
    throw new Error(e);
  }
};

const getOneDog = async (dogId) => {
  try {
    let dog = await Dogs.findByPk(dogId, {
      include: attrModels,
    });

    return dog || message.noRecord('Dog', dogId);
  } catch (e) {
    return message.error;
  }
};

const postOneDog = async (dog) => {
  try {
    return await Dogs.create(dog);
  } catch (e) {
    return message.error;
  }
};

const patchOneDog = async (dogPortion, dogId) => {
  try {
    await Dogs.update(dogPortion, {
      where: {
        id: dogId,
      },
    });
    return message.updatedRecord('Dog', dogId);
  } catch (e) {
    return message.updatedNoRecord('Dog', dogId);
  }
};

const deleteOneDog = async (dogId) => {
  try {
    await Dogs.destroy({
      where: {
        id: dogId,
      },
    });
    return message.deletedRecord('Dog', dogId);
  } catch (e) {
    return message.deletedNoRecord('Dog', dogId);
  }
};

module.exports = {
  getAllDogs,
  getOneDog,
  postOneDog,
  patchOneDog,
  deleteOneDog,
};
