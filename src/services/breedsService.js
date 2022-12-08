const Breeds = require('../database/Breeds');

const getAllBreeds = () => {
  return Breeds.getAllBreeds();
};

const getOneBreed = (breedId) => {
  return Breeds.getOneBreed(breedId);
};

const postOneBreed = (newBreed) => {
  return Breeds.postOneBreed(newBreed);
};

const patchOneBreed = (breedPortion, breedId) => {
  return Breeds.patchOneBreed(breedPortion, breedId);
};

const deleteOneBreed = (breedId) => {
  return Breeds.deleteOneDog(breedId);
};

module.exports = {
  getAllBreeds,
  getOneBreed,
  postOneBreed,
  patchOneBreed,
  deleteOneBreed,
};
