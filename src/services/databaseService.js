const axiosRequest = require('../utils/axiosRequest');
const formating = require('../utils/formatting');

const Database = require('../database/Database');

// post database
const postDatabase = async () => {
  const allDogs = await axiosRequest('GET', '/breeds');
  await Database.deleteDatabase();

  allDogs.forEach(async (dog) => {
    const formatedDog = formating.postDog(dog);
    Database.postDatabase(formatedDog);
  });

  return allDogs;
};

// remove
const deleteDatabase = () => {
  Database.deleteDatabase();
};

module.exports = {
  postDatabase,
  deleteDatabase,
};
