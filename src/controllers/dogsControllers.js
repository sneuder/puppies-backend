const dogsService = require('../services/dogsService');

const getAllDogs = (req, res) => {
  dogsService.getAllDogs(req.query).then((allDogs) => {
    res.json(allDogs);
  });
};

const getOneDog = (req, res) => {
  const dogId = req.params.dogId;
  dogsService.getOneDog(dogId).then((dog) => {
    res.json(dog);
  });
};

const postOneDog = (req, res) => {
  const newDog = req.body;
  dogsService.postOneDog(newDog).then((dog) => {
    res.json(dog);
  });

  res.json({
    done: true,
  });
};

const patchOneDog = (req, res) => {
  const dogPortion = req.body;
  const dogId = req.params.dogId;

  dogsService.patchOneDog(dogPortion, dogId).then((dog) => {
    res.json(dog);
  });
};

const deleteOneDog = (req, res) => {
  const dogId = req.params.dogId;
  dogsService.deleteOneDog(dogId).then((status) => {
    res.json(status);
  });
};

module.exports = {
  getAllDogs,
  getOneDog,
  postOneDog,
  patchOneDog,
  deleteOneDog,
};
