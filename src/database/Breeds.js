const message = require('../utils/messages');
const sequelize = require('../db');
const Breeds = sequelize.models.breeds;

const getAllBreeds = () => {
  return Breeds.findAll();
  //message.noRecords('Breeds');
  // return message.error;
};

const getOneBreed = (breedId) => {
  return Breeds.findByPk(breedId);
};

const postOneBreed = async (newBreed) => {
  try {
    return await Breeds.create(newBreed);
  } catch (e) {
    return message.error;
  }
};

const patchOneBreed = async (breedPortion, breedId) => {
  try {
    await Breeds.update(breedPortion, {
      where: {
        id: breedId,
      },
    });
    return message.updatedRecord('Breed', breedId);
  } catch (e) {
    return message.error;
  }
};

const deleteOneDog = async (breedId) => {
  try {
    await Breeds.destroy({
      where: {
        id: breedId,
      },
    });
    return message.deletedRecord('Breed', breedId);
  } catch (e) {
    return message.deletedNoRecord('Breed', breedId);
  }
};

module.exports = {
  getAllBreeds,
  getOneBreed,
  postOneBreed,
  patchOneBreed,
  deleteOneDog,
};
