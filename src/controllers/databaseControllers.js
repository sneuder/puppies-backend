const databaseService = require('../services/databaseService');

const postDatabase = async(req, res) => {
  const allDogs = await databaseService.postDatabase();
  res.json(allDogs);
};

const deleteDatabase = (req, res) => {
  res.send('database populated');
};

module.exports = {
  postDatabase,
  deleteDatabase
}