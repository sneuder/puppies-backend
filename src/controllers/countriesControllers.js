const countriesService = require('../services/countriesService');

const getAllCountries = async (req, res) => {
  const allCountries = await countriesService.getAllCountries();
  res.json(allCountries);
};

const getOneCountry = (req, res) => {

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