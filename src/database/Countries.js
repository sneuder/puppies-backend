const message = require("../utils/messages");
const sequelize = require("../db");
const Countries = sequelize.models.countries;

const getAllCountries = async () => {
  try {
    return (await Countries.findAll()) || message.noRecords("Countries");
  } catch (e) {
    return message.error;
  }
};

const getOneCountry = async (countryId) => {
  try {
    return (
      (await Countries.findByPk(countryId)) ||
      message.noRecord("Country", countryId)
    );
  } catch (e) {
    return message.error;
  }
};

const postOneCountry = async (newCountry) => {
  try {
    return await Countries.create(newCountry);
  } catch (e) {
    return message.error;
  }
};

const patchOneCountry = async (countryPortion, countryId) => {
  try {
    await Countries.update(countryPortion, { where: { id: countryId } });
    return message.updatedRecord("Country", countryId);
  } catch (e) {
    return message.updatedNoRecord("Country", countryId);
  }
};

const deleteOneCountry = async (countryId) => {
  try {
    await Countries.destroy({ where: { id: countryId } });
    return message.deletedRecord("Country", countryId);
  } catch (e) {
    return message.deletedNoRecord("Country", countryId);
  }
};

module.exports = {
  getAllCountries,
  getOneCountry,
  postOneCountry,
  patchOneCountry,
  deleteOneCountry,
};
