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

const postOneCountry = async (newCountry) => {
  try {
    return await Countries.create(newCountry);
  } catch(e) {return {status: 'Country not created'}}
};

const patchOneCountry = (countryPortion, countryId) => {
  try {
    Countries.update(countryPortion, {where:{id: countryId}});
    return {status: `Country ${countryId} updated`}
  } catch(e) {{status: `Country ${countryId} not updated`}}
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