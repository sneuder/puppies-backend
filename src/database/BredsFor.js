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

const postOneBredFor = async (newBredFor) => {
  try {return await BredsFor.create(newBredFor)
  } catch (e) {return {status: 'BredFor could not be created'}}
};

const patchOneBredFor = async (bredForPortion, bredForId) => {
  try {
    await BredsFor.update(bredForPortion, {where: {id: bredForId}});
    return {status: `BredFor ${bredForId} updated`}
  } catch (e) {return {status: `BredFor ${bredForId} not updated`}}
};

const deleteOneBredFor = async (bredForId) => {
  try {
    await BredsFor.destroy(bredForId);
    return {status: `BredFor ${bredForId} removed`}
  } catch (e) {return {status: `BredFor ${bredForId} could not be removed`}}
};

module.exports = {
  getAllBredsFor,
  getOneBredFor,
  postOneBredFor,
  patchOneBredFor,
  deleteOneBredFor
};