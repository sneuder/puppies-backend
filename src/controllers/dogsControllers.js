const dogsService = require("../services/dogsService");

const getAllDogs = async (req, res) => {
  const allDogs = await dogsService.getAllDogs();
  res.json(allDogs);
};

const getOneDog = async (req, res) => {
  const dogId = req.params.dogId;
  const dog = await dogsService.getOneDog(dogId);
  res.json(dog);
};

const postOneDog = async (req, res) => {
  const newDog = req.body;
  const dog = await dogsService.postOneDog(newDog);
  res.json(dog);
};

const patchOneDog = async (req, res) => {
  const dogPortion = req.body;
  const dogId = req.params.dogId;

  const dog = await dogsService.patchOneDog(dogPortion, dogId);
  res.json(dog);
};

const deleteOneDog = async (req, res) => {
  const dogId = req.params.dogId;
  const status = await dogsService.deleteOneDog(dogId);
  res.json(status);
};

module.exports = {
  getAllDogs,
  getOneDog,
  postOneDog,
  patchOneDog,
  deleteOneDog,
};
