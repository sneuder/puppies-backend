const Breeds = require('../database/Breeds');

const getAllBreeds = () => {
  return Breeds.getAllBreeds().then((response) => {
    return response;
  });
};

const getOneBreed = (breedId) => {
  return Breeds.getOneBreed(breedId).then((response) => {
    return response;
  });
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
