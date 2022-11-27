const BredsFor = require('../database/BredsFor');

const getAllBredsFor = async () => {
  return await BredsFor.getAllBredsFor();
};

const getOneBredFor = async (bredForId) => {
  return await BredsFor.getOneBredFor(bredForId);
};

const postOneBredFor = async (newBredFor) => {
  return await BredsFor.postOneBredFor(newBredFor);
};

const patchOneBredFor = async (bredForPortion, bredForId) => {
  return await BredsFor.patchOneBredFor(bredForPortion, bredForId);
};

const deleteOneBredFor = async (bredForId) => {
  return await BredsFor.deleteOneBredFor(bredForId);
};

module.exports = {
  getAllBredsFor,
  getOneBredFor,
  postOneBredFor,
  patchOneBredFor,
  deleteOneBredFor,
};
