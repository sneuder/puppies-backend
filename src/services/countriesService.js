const Countries = require('../database/Countries');

const getAllCountries = async () => {
  return await Countries.getAllCountries();
};

const getOneCountry =  async (countryId) => {
  return await Countries.getOneCountry(countryId);
};

const postOneCountry = async (newCountry) => {
  return await Countries.postOneCountry(newCountry);
};

const patchOneCountry = async (countryPortion, countrydId) => {
  return await Countries.patchOneCountry(countryPortion, countrydId);
};

const deleteOneCountry = async (countrydId) => {
  return await Countries.deleteOneCountry(countrydId);
};

module.exports = {
  getAllCountries,
  getOneCountry,
  postOneCountry,
  patchOneCountry,
  deleteOneCountry
};