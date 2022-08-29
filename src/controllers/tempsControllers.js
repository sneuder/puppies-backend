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

const postOneTemp = async (req, res) => {
  const newTemp = req.body;
  const temp = await tempsService.postOneTemp(newTemp);
  res.json(temp);
};

const patchOneTemp = async (req, res) => {
  const tempId = req.params.tempId;
  const tempPortion = req.body;
  
  const msg = await tempsService.patchOneTemp(tempId, tempPortion);
  res.json(msg);
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