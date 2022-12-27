const message = require('../utils/messages');
const sequelize = require('../db');

const Dogs = sequelize.models.dogs;
const attrModels = Object.values(require('../constants/models'));

const setAssociations = require('./utils/setAssociations');

const getAllDogs = async (searchConditions) => {
  try {
    const dogs = await Dogs.findAndCountAll(searchConditions);
    for (const dog of dogs.rows) dog.dataValues.temps = await dog.getTemps();

    return dogs;
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
    const postedDog = await Dogs.create(dog);
    // make associations
    const attributes = Object.keys(dog.attributes);
    for (let i = 0; i < attributes.length; i++) {
      await setAssociations[attributes[i]](
        postedDog,
        dog.attributes[attributes[i]]
      );
    }

    return await Dogs.findByPk(dog.id, { include: { all: true } });
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
