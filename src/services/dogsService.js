const axios = require('axios');
const axiosRequest = require('../utils/axiosRequest');

const getAllDogs = () => {
  return axiosRequest('GET', '/breeds');
};

const getOneDog = () => {};

const postOneDog = () => {};

const patchOneDog = () => {};

const deleteOneDog = () => {};

module.exports = {
  getAllDogs,
  getOneDog,
  postOneDog,
  patchOneDog,
  deleteOneDog
}