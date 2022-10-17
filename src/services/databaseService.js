const axiosRequest = require("../utils/axiosRequest");
const formating = require("../utils/formatting");

const Database = require("../database/Database");

// post database
const postDatabase = async () => {
  const allDogs = await axiosRequest("GET", "/breeds");
  await Database.deleteDatabase();

  allDogs.forEach((dog) => {
    const formatedDog = formating.postDog(dog);
    Database.postDatabase(formatedDog);
  });

  // Get all dogs from DATABASE not from API
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
