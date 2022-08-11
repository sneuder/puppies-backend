const axios = require('axios');
const axiosRequest = require('../utils/axiosRequest');
const Database = require('../database/Dogs');

const getAllDogs = async () => {
  return await Database.getAllDogs();
};

const getOneDog = async (dogId) => {
  return await Database.getOneDog(dogId);
};

const postOneDog = async (dog) => {
  return await Database.postOneDog(dog);
};

const patchOneDog = async (dogPortion, dogId) => {
  return await Database.patchOneDog(dogPortion, dogId);
};

const deleteOneDog = async (dogId) => {
  return await Database.deleteOneDog(dogId);
};

module.exports = {
  getAllDogs,
  getOneDog,
  postOneDog,
  patchOneDog,
  deleteOneDog
}