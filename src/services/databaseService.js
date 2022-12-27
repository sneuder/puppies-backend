const Dog = require('../models/entities/Dogs');
const DogAttributes = require('../models/entities/Attributes');

const axiosRequest = require('../utils/axiosRequest');
const Database = require('../database/Database');

// post database
const postDatabase = () => {
  return axiosRequest('GET', '/breeds').then((allDogs) => {
    return Database.deleteDatabase().then(async () => {
      const postedDogs = allDogs.map((dog) => {
        dog.attributes = new DogAttributes(dog);
        dog = new Dog(dog);

        return Database.postDatabase(dog);
      });

      return Promise.all(postedDogs).then(() => {
        // return Database.getDatabase();
      });
    });
  });
};

// remove
const deleteDatabase = () => {
  Database.deleteDatabase();
};

module.exports = {
  postDatabase,
  deleteDatabase,
};
