const sequelize = require('../db');
const Breeds = sequelize.models.breeds;

const getAllBreeds = async () => {
  return await Breeds.findAll();
};

const getOneBreed = async (breedId) => {
  try {
    return await Breeds.findByPk(breedId) || {status: 'Breed not found'};
  } catch (e) {return ({status: 'Breed not found'})}
};

const postOneBreed = async (newBreed) => {
  try {
    return await Breeds.create(newBreed);
  } catch(e) {
    console.log(e);
    return {status: 'Breed already exits'}
  }
};

const patchOneBreed = async (breedPortion, breedId) => {
  try {
    await Breeds.update(
      breedPortion, {
        where: {
          id: breedId
        }
      }
    );
    return ({status: `Breed ${breedId} updated`});
    
  } catch(e) {return ({status: `Breed ${breedId} with no updating`});}
}

const deleteOneDog = async (breedId) => {
  try {
    await Breeds.destroy({
      where: {
        id: breedId
      }
    });
    return ({status: `Breed ${breedId} deleted`});
  } catch(e) {return ({status: `Breed ${breedId} not deleted`})}
}

module.exports = {
  getAllBreeds,
  getOneBreed,
  postOneBreed,
  patchOneBreed,
  deleteOneDog
}

