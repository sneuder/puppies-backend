const bredsForService = require('../services/bredsForService');

const getAllBredsFor = async (req, res) => {
  const allBredsFor = await bredsForService.getAllBredsFor();
  res.json(allBredsFor);
};

const getOneBredFor = async (req, res) => {
  const bredForId = req.params.bredForId;
  const bredFor = await bredsForService.getOneBredFor(bredForId);
  res.json(bredFor);
};

const postOneBredFor = async (req, res) => {
  const newBredFor = req.body;
  const newPostedBredFor = await bredsForService.postOneBredFor(newBredFor);
  res.json(newPostedBredFor);
};

const patchOneBredFor = async (req, res) => {
  const bredForPortion = req.body;
  const bredForId = req.params.bredForId;

  const updatedBredFor = await bredsForService.patchOneBredFor(
    bredForPortion,
    bredForId
  );
  res.json(updatedBredFor);
};

const deleteOneBredFor = async (req, res) => {
  const bredForId = req.params.bredForId;
  const status = await bredsForService.deleteOneBredFor(bredForId);
  res.json(status);
};

module.exports = {
  getAllBredsFor,
  getOneBredFor,
  postOneBredFor,
  patchOneBredFor,
  deleteOneBredFor,
};
