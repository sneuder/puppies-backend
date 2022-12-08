const breedsService = require('../services/breedsService');

const getAllBreeds = (req, res) => {
  breedsService.getAllBreeds().then((response) => {
    res.json(response);
  });
};

const getOneBreed = (req, res) => {
  const breedId = req.params.breedId;
  breedsService.getOneBreed(breedId).then((response) => {
    res.json(response);
  });
};

const postOneBreed = (req, res) => {
  const newBreed = req.body;
  breedsService.postOneBreed(newBreed).then((newPostedBreed) => {
    res.json(newPostedBreed);
  });
};

const patchOneBreed = (req, res) => {
  const breedPortion = req.body;
  const breedId = req.params.breedId;

  breedsService.patchOneBreed(breedPortion, breedId).then((updatedBreed) => {
    res.json(updatedBreed);
  });
};

const deleteOneBreed = (req, res) => {
  const breedId = req.params.breedId;
  breedsService.deleteOneBreed(breedId).then((status) => {
    res.json(status);
  });
};

module.exports = {
  getAllBreeds,
  getOneBreed,
  postOneBreed,
  patchOneBreed,
  deleteOneBreed,
};
