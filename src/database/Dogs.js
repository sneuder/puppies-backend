const message = require("../utils/messages");
const sequelize = require("../db");
const Dogs = sequelize.models.dogs;

const getAllDogs = async () => {
  try {
    return (await Dogs.findAll()) || message.noRecords("Dogs");
  } catch (e) {
    return message.error;
  }
};

const getOneDog = async (dogId) => {
  try {
    return (await Dogs.findByPk(dogId)) || message.noRecord("Dog", dogId);
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
    return message.updatedRecord("Dog", dogId);
  } catch (e) {
    return message.updatedNoRecord("Dog", dogId);
  }
};

const deleteOneDog = async (dogId) => {
  try {
    await Dogs.destroy({
      where: {
        id: dogId,
      },
    });
    return message.deletedRecord("Dog", dogId);
  } catch (e) {
    return message.deletedNoRecord("Dog", dogId);
  }
};

module.exports = {
  getAllDogs,
  getOneDog,
  postOneDog,
  patchOneDog,
  deleteOneDog,
};
