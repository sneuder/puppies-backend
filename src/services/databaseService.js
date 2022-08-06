const axiosRequest = require('../utils/axiosRequest');
const Database = require('../database/Database');

const postDatabase = async () => {
  const allDogs =  await axiosRequest('GET', '/breeds');
  Database.postDatabase(allDogs);
  return allDogs;
};

const postDatabaseTemps = () => {
  
}

const deleteDatabase = () => {
  Database.deleteDatabase();
};

module.exports = {
  postDatabase,
  deleteDatabase
}