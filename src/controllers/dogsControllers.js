const dogsService = require('../services/dogsService');

const getAllDogs = async(req, res) => {
  const allDogs = await dogsService.getAllDogs();
  res.json(allDogs);
};

const getOneDog = (req, res) => {
  res.send('dog created');
};

const postOneDog = (req, res) => {
  res.send('dog created');
};

const patchOneDog = (req, res) => {
  res.send('dog created');
};

const deleteOneDog = (req, res) => {
  res.send('dog created');
};

module.exports = {
  getAllDogs,
  getOneDog,
  postOneDog,
  patchOneDog,
  deleteOneDog
}