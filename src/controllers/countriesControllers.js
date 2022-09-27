const countriesService = require('../services/countriesService');

const getAllCountries = async (req, res) => {
  const allCountries = await countriesService.getAllCountries();
  res.json(allCountries);
};

const getOneCountry = async (req, res) => {
  const countryId = req.params.countrydId;
  const country = await countriesService.getOneCountry(countryId);
  res.json(country);
};

const postOneCountry = (req, res) => {

};

const patchOneCountry = (req, res) => {

};

const deleteOneCountry = (req, res) => {

};

module.exports = {
  getAllCountries,
  getOneCountry,
  postOneCountry,
  patchOneCountry,
  deleteOneCountry
};