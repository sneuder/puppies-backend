const Temps = require('../database/Temps');

const getAllTemps = async () => {
  return await Temps.getAllTemps();
};

const getOneTemp = async (tempId) => {
  return await Temps.getOneTemp(tempId);
};

const postOneTemp = () => {

};

const patchOneTemp = () => {

};

const deleteOneTemp = () => {

};

module.exports = {
  getAllTemps,
  getOneTemp,
  postOneTemp,
  patchOneTemp,
  deleteOneTemp
};