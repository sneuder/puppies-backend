const tempsService = require('../services/tempsService');

const getAllTemps = async (req, res) => {
  const allTemps = await tempsService.getAllTemps();
  res.json(allTemps);
};

const getOneTemp = async (req, res) => {
  const tempId = req.params.tempId;
  const temp = await tempsService.getOneTemp(tempId);
  res.json(temp);
};

const postOneTemp = (req, res) => {

};

const patchOneTemp = (req, res) => {

};

const deleteOneTemp = (req, res) => {

};

module.exports = {
  getAllTemps,
  getOneTemp,
  postOneTemp,
  patchOneTemp,
  deleteOneTemp
};