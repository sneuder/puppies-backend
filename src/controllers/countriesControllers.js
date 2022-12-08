const countriesService = require('../services/countriesService');

const getAllCountries = (req, res) => {
  countriesService.getAllCountries().then((allCountries) => {
    res.json(allCountries);
  });
};

const getOneCountry = (req, res) => {
  const countryId = req.params.countrydId;
  countriesService.getOneCountry(countryId).then((country) => {
    res.json(country);
  });
};

const postOneCountry = (req, res) => {
  const newCountry = req.body;
  countriesService.postOneCountry(newCountry).then((newPostedCountry) => {
    res.json(newPostedCountry);
  });
};

const patchOneCountry = (req, res) => {
  const countryPortion = req.body;
  const countryId = req.params.countryId;

  countriesService
    .patchOneCountry(countryPortion, countryId)
    .then((updatedCountry) => {
      res.json(updatedCountry);
    });
};

const deleteOneCountry = (req, res) => {
  const countrydId = req.params.countryId;
  countriesService.deleteOneCountry(countrydId).then((status) => {
    res.json(status);
  });
};

module.exports = {
  getAllCountries,
  getOneCountry,
  postOneCountry,
  patchOneCountry,
  deleteOneCountry,
};
