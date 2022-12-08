const databaseService = require('../services/databaseService');

const postDatabase = (req, res) => {
  databaseService.postDatabase().then((allDogs) => {
    res.json(allDogs);
  });
};

const deleteDatabase = (req, res) => {
  databaseService.deleteDatabase().then(() => res.send('Unpopulated Database'));
};

module.exports = {
  postDatabase,
  deleteDatabase,
};
