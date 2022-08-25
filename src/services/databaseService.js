const axiosRequest = require('../utils/axiosRequest');
const formating = require('../utils/formatting');

const Database = require('../database/Database');

// post database
const postDatabase = async () => {
  const allDogs =  await axiosRequest('GET', '/breeds');
  
  await Database.deleteDatabase();
  Database.postDatabaseAttributes(allDogs);

  const formatedDogs = formating.postDogs(allDogs);
  return await Database.postDatabase(formatedDogs);
};

// remove
const deleteDatabase = () => {
  Database.deleteDatabase();
};

module.exports = {
  postDatabase,
  deleteDatabase
}