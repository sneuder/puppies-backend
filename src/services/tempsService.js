const Temps = require('../database/Temps');

const getAllTemps = async () => {
  return await Temps.getAllTemps();
};

const getOneTemp = async (tempId) => {
  return await Temps.getOneTemp(tempId);
};

const postOneTemp = async (temp) => {
  return await Temps.postOneTemp(temp);
};

const patchOneTemp = async (tempId, tempPortion) => {
  return await Temps.patchOneTemp(tempId, tempPortion)
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