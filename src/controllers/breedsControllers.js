const breedsService = require('../services/breedsService');

const getAllBreeds = (req, res) => {
  breedsService.getAllBreeds().then((response) => {
    res.json(response);
  });
  // res.json({a: "a"});
};

const getOneBreed = (req, res) => {
  const breedId = req.params.breedId;
  breedsService.getOneBreed(breedId).then((response) => {
    res.json(response);
  });
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
  deleteOneBreed,
};
