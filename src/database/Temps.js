const sequelize = require('../db');
const Temps = sequelize.models.temps;

const getAllTemps = async () => {
  try {return await Temps.findAll()}
  catch(e) {return {status: 'Temps not found'}}
};

const getOneTemp = async (tempId) => {
  try {return await Temps.findByPk(tempId) || {status: `Temp ${tempId} was not found`}} 
  catch(e) {return {status: `Temp ${tempId} was not found`}}
};

const postOneTemp = async (temp) => {
  try{return await Temps.create(temp)}
  catch(e){return {status: `Temp could not be created`}}
}

const patchOneTemp = async (tempId, tempPortion) => {
  try{
    await Temps.update(tempPortion, {
      where: {id: tempId}
    });
    return ({status: `Temp ${tempId} updated`});
  } catch (e) {return ({status: `Temp ${tempId} not updated`})}
}

const deleteOneTemp = async (tempId) => {
  try {
    await Temps.destroy({
      where: {id: tempId}
    });
    return ({status: `Temp ${tempId} deleted`});

  } catch (e) {return ({status: `Temp ${tempId} could not be deleted`})}
}

module.exports = {
  getAllTemps,
  getOneTemp,
  postOneTemp,
  patchOneTemp,
  deleteOneTemp
};