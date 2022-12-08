const Countries = require('../database/Countries');

const getAllCountries = () => {
  return Countries.getAllCountries();
};

const getOneCountry = (countryId) => {
  return Countries.getOneCountry(countryId);
};

const postOneCountry = (newCountry) => {
  return Countries.postOneCountry(newCountry);
};

const patchOneCountry = (countryPortion, countrydId) => {
  return Countries.patchOneCountry(countryPortion, countrydId);
};

const deleteOneCountry = (countrydId) => {
  return Countries.deleteOneCountry(countrydId);
};

module.exports = {
  getAllCountries,
  getOneCountry,
  postOneCountry,
  patchOneCountry,
  deleteOneCountry,
};
