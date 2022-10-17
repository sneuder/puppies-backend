const databaseService = require("../services/databaseService");

const postDatabase = async (req, res) => {
  const allDogs = await databaseService.postDatabase();
  res.json(allDogs);
};

const deleteDatabase = (req, res) => {
  databaseService.deleteDatabase();
  res.send("Unpopulated Database");
};

module.exports = {
  postDatabase,
  deleteDatabase,
};
