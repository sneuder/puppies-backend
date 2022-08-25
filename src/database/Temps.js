const sequelize = require('../db');
const Temps = sequelize.models.temps;

const getAllTemps = async () => {
  try {return await Temps.findAll()}
  catch(e) {return {status: 'Temps not found'}}
};

const getOneTemp = async (tempId) => {
  try {return await Temps.findByPk(tempId)} 
  catch(e) {return {status: `Temp ${tempId} was not found`}}
};

module.exports = {
  getAllTemps,
  getOneTemp
};