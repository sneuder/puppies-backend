const Breeds = require("../database/Breeds");

const getAllBreeds = async () => {
  return await Breeds.getAllBreeds();
};

const getOneBreed = async (breedId) => {
  return await Breeds.getOneBreed(breedId);
};

const postOneBreed = async (newBreed) => {
  return await Breeds.postOneBreed(newBreed);
};

const patchOneBreed = async (breedPortion, breedId) => {
  return await Breeds.patchOneBreed(breedPortion, breedId);
};

const deleteOneBreed = async (breedId) => {
  return await Breeds.deleteOneDog(breedId);
};

module.exports = {
  getAllBreeds,
  getOneBreed,
  postOneBreed,
  patchOneBreed,
  deleteOneBreed,
};
