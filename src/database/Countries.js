const sequelize = require('../db');
const Countries = sequelize.models.countries;

const getAllCountries = async () => {
  return await Countries.findAll();
};

const getOneCountry = async (countryId) => {
  try {
    return await Countries.findByPk(countryId)
  } catch(e) {return {status: 'Country not found'}}
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