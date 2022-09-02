const bredsForService = require('../services/bredsForService');

const getAllBredsFor = async (req, res) => {
  const allBredsFor = await bredsForService.getAllBredsFor();
  res.json(allBredsFor);
};

const getOneBredFor = (req, res) => {

};

const postOneBredFor = (req, res) => {

};

const patchOneBredFor = (req, res) => {

};

const deleteOneBredFor = (req, res) => {

};

module.exports = {
  getAllBredsFor,
  getOneBredFor,
  postOneBredFor,
  patchOneBredFor,
  deleteOneBredFor
};