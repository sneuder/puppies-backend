const Database = require('../database/Dogs');

const getAllDogs = () => {
  return Database.getAllDogs();
};

const getOneDog = (dogId) => {
  return Database.getOneDog(dogId);
};

const postOneDog = (dog) => {
  return Database.postOneDog(dog);
};

const patchOneDog = (dogPortion, dogId) => {
  return Database.patchOneDog(dogPortion, dogId);
};

const deleteOneDog = (dogId) => {
  return Database.deleteOneDog(dogId);
};

module.exports = {
  getAllDogs,
  getOneDog,
  postOneDog,
  patchOneDog,
  deleteOneDog,
};
