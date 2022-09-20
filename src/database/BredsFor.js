const sequelize = require('../db');
const BredsFor = sequelize.models.bredsfors;

const getAllBredsFor = async () => {
  try {return await BredsFor.findAll() || {status: 'There are not BredsFor'};
  } catch(e) {return {status: 'Something went wrong'}};
};

const getOneBredFor = async (bredForId) => {
  try {return await BredsFor.findByPk(bredForId) || {status: 'There is not BredFor'}
  } catch(e) {return {status: 'Something went wrong'}}
};

const postOneBredFor = () => {

};

const patchOneBredFor = () => {

};

const deleteOneBredFor = () => {

};

module.exports = {
  getAllBredsFor,
  getOneBredFor,
  postOneBredFor,
  patchOneBredFor,
  deleteOneBredFor
};