const Countries = require('../database/Countries');

const getAllCountries = async () => {
  return await Countries.getAllCountries();
};

const getOneCountry = () => {

};

const postOneCountry = () => {

};

const patchOneCountry = () => {

};

const deleteOneCountry = () => {

};

module.exports = {
  getAllCountries,
  getOneCountry,
  postOneCountry,
  patchOneCountry,
  deleteOneCountry
};