const Temps = require('../database/Temps');
const Attribute = require('../models/entities/Attribute');

const getAllTemps = () => {
  return Temps.getAllTemps();
};

const getOneTemp = (tempId) => {
  return Temps.getOneTemp(tempId);
};

const postOneTemp = (temp) => {
  temp = new Attribute(temp.name);
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
