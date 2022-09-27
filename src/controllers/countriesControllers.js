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

const postOneCountry = async (req, res) => {
  const newCountry = req.body;
  const newPostedCountry = await countriesService.postOneCountry(newCountry);
  res.json(newPostedCountry);
};

const patchOneCountry = async (req, res) => {
  const countryPortion = req.body;
  const countryId = req.params.countryId;

  const updatedCountry = await countriesService.patchOneCountry(countryPortion, countryId);
  res.json(updatedCountry);
};

const deleteOneCountry = async (req, res) => {
  const countrydId = req.params.countryId;
  const status = await countriesService.deleteOneCountry(countrydId);
  res.json(status);
};

module.exports = {
  getAllCountries,
  getOneCountry,
  postOneCountry,
  patchOneCountry,
  deleteOneCountry
};