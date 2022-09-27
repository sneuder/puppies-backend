const sequelize = require('../db');
const Countries = sequelize.models.countries;

const getAllCountries = async () => {
  return await Countries.findAll();
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