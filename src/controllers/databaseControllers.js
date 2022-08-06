const databaseService = require('../services/databaseService');

const postDatabase = async(req, res) => {
  try {
    const allDogs = await databaseService.postDatabase();
    res.json(allDogs);
  } catch(e) {
    res.send('Dogs not found on api to populate');
  }
};

const deleteDatabase = (req, res) => {
  databaseService.deleteDatabase();
  res.send('Unpopulated Database');
};

module.exports = {
  postDatabase,
  deleteDatabase
}