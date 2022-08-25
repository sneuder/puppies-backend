const breedsService = require('../services/breedsService');

const getAllBreeds = async (req, res) => {
  const allBreeds = await breedsService.getAllBreeds();
  res.json(allBreeds);
};

const getOneBreed = async (req, res) => {
  const breedId = req.params.breedId;
  const breed = await breedsService.getOneBreed(breedId);
  res.json(breed);
};

const postOneBreed = async (req, res) => {
  const newBreed = req.body;
  const newPostedBreed = await breedsService.postOneBreed(newBreed);
  res.json(newPostedBreed);
};

const patchOneBreed = async (req, res) => {
  const breedPortion = req.body;
  const breedId = req.params.breedId;
  
  const updatedBreed = await breedsService.patchOneBreed(breedPortion, breedId);
  res.json(updatedBreed);
};

const deleteOneBreed = async (req, res) => {
  const breedId = req.params.breedId;
  const status = await breedsService.deleteOneBreed(breedId);
  res.json(status);
};

module.exports = {
  getAllBreeds,
  getOneBreed,
  postOneBreed,
  patchOneBreed,
  deleteOneBreed
};