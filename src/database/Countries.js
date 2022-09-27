const sequelize = require('../db');
const Countries = sequelize.models.countries;

const getAllCountries = async () => {
  return await Countries.findAll();
};

const getOneCountry = async (countryId) => {
  try {
    return await Countries.findByPk(countryId)|| {status: `Country ${countryId} not found`}
  } catch(e) {return {status: 'Country not found'}}
};

const postOneCountry = async (newCountry) => {
  try {
    return await Countries.create(newCountry);
  } catch(e) {return {status: 'Country not created'}}
};

const patchOneCountry = async (countryPortion, countryId) => {
  try {
    await Countries.update(countryPortion, {where:{id: countryId}});
    return {status: `Country ${countryId} updated`}
  } catch(e) {return {status: `Country ${countryId} not updated`}}
};

const deleteOneCountry = async (countryId) => {
  try {
    await Countries.destroy({where: {id: countryId}});
    return {status: `Country ${countryId} deleted`}
  } catch(e) {return {status: `Country ${countryId} not deleted`}}
};

module.exports = {
  getAllCountries,
  getOneCountry,
  postOneCountry,
  patchOneCountry,
  deleteOneCountry
};