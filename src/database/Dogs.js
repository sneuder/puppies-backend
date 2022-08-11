const sequelize = require('../db');
const formating = require('../utils/formatting');

const Dogs = sequelize.models.dogs;

const getAllDogs = async () => {
  return await Dogs.findAll();
}

const getOneDog = async (dogId) => {
  return await Dogs.findByPk(dogId);
}

const postOneDog = async (dog) => {
  return await Dogs.create(dog);
};

const patchOneDog = async (dogPortion, dogId) => {
  try {
    await Dogs.update(
      dogPortion, {
      where: {
        id: dogId
      }
    });
    return ({status: `Dog ${dogId} updated`});
     
  } catch (e) {
    console.log(e);
    return ({status: `Dog ${dogId} without updating`});
  };
};

const deleteOneDog = async (dogId) => {
  try {
    await Dogs.destroy({
      where: {
        id: dogId
      }
    });
    return ({status: `Dog ${dogId} deleted`});

  } catch(e){
    console.log(e);
    return ({status: `Dog ${dogId} not deleted`})
  }
};

module.exports = {
  getAllDogs,
  getOneDog,
  postOneDog,
  patchOneDog,
  deleteOneDog
};