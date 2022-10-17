const message = require("../utils/messages");
const sequelize = require("../db");
const Breeds = sequelize.models.breeds;

const getAllBreeds = async () => {
  try {
    return (await Breeds.findAll()) || message.noRecords("Breeds");
  } catch (e) {
    return message.error;
  }
};

const getOneBreed = async (breedId) => {
  try {
    return (
      (await Breeds.findByPk(breedId)) || message.noRecord("Breeds", breedId)
    );
  } catch (e) {
    return message.error;
  }
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
    return message.updatedRecord("Breed", breedId);
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
    return message.deletedRecord("Breed", breedId);
  } catch (e) {
    return message.deletedNoRecord("Breed", breedId);
  }
};

module.exports = {
  getAllBreeds,
  getOneBreed,
  postOneBreed,
  patchOneBreed,
  deleteOneDog,
};
