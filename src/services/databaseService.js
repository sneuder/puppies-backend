const axiosRequest = require('../utils/axiosRequest');
const Database = require('../database/Database');

const postDatabase = async () => {
  const allDogs =  await axiosRequest('GET', '/breeds');
  const dataBaseDogs = await Database.postDatabase(allDogs);
  return dataBaseDogs;
};

// remove
const deleteDatabase = () => {
  Database.deleteDatabase();
};

module.exports = {
  postDatabase,
  deleteDatabase
}