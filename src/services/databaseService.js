const axiosRequest = require('../utils/axiosRequest');
const formating = require('../utils/formatting');

const Database = require('../database/Database');

// post database
const postDatabase = () => {
  return axiosRequest('GET', '/breeds').then((allDogs) => {
    return Database.deleteDatabase().then(async () => {
      // for (let i = 0; i < allDogs.length; i++) {
      //   const formatedDog = formating.postDog(allDogs[i]);
      //   await Database.postDatabase(formatedDog);
      // }

      const postedDogs = allDogs.map((dog) => {
        const formatedDog = formating.postDog(dog);
        return Database.postDatabase(formatedDog);
      });

      return Promise.all(postedDogs).then(() => {
        return Database.getDatabase();
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
