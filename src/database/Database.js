const sequelize = require('../db');
const Dogs = sequelize.models.dogs;
const formating = require('../utils/formatting');

const postDatabase = async (dogs) => {
  deleteDatabase();
  dogs.forEach(async dog => {
    const formatedDog = formating.postDog(dog);
    await Dogs.create(formatedDog);
  });
};

const deleteDatabase = async () => {
  await Dogs.destroy({truncate: true});
}

module.exports = {
  postDatabase,
  deleteDatabase,
}