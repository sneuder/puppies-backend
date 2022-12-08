const Temps = require('../database/Temps');

const getAllTemps = () => {
  return Temps.getAllTemps();
};

const getOneTemp = (tempId) => {
  return Temps.getOneTemp(tempId);
};

const postOneTemp = (temp) => {
  return Temps.postOneTemp(temp);
};

const patchOneTemp = (tempId, tempPortion) => {
  return Temps.patchOneTemp(tempId, tempPortion);
};

const deleteOneTemp = (tempId) => {
  return Temps.deleteOneTemp(tempId);
};

module.exports = {
  getAllTemps,
  getOneTemp,
  postOneTemp,
  patchOneTemp,
  deleteOneTemp,
};
