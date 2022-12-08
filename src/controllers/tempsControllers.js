const tempsService = require('../services/tempsService');

const getAllTemps = (req, res) => {
  tempsService.getAllTemps().then((allTemps) => {
    res.json(allTemps);
  });
};

const getOneTemp = (req, res) => {
  const tempId = req.params.tempId;
  tempsService.getOneTemp(tempId).then((temp) => {
    res.json(temp);
  });
};

const postOneTemp = (req, res) => {
  const newTemp = req.body;
  tempsService.postOneTemp(newTemp).then((temp) => {
    res.json(temp);
  });
};

const patchOneTemp = (req, res) => {
  const tempId = req.params.tempId;
  const tempPortion = req.body;

  tempsService.patchOneTemp(tempId, tempPortion).then((msg) => {
    res.json(msg);
  });
};

const deleteOneTemp = (req, res) => {
  const tempId = req.params.tempId;
  tempsService.deleteOneTemp(tempId).then((status) => {
    res.json(status);
  });
};

module.exports = {
  getAllTemps,
  getOneTemp,
  postOneTemp,
  patchOneTemp,
  deleteOneTemp,
};
