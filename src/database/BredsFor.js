const message = require('../utils/messages');
const sequelize = require('../db');

const BredsFor = sequelize.models.bredsfors;

const getAllBredsFor = async () => {
  try {
    return (await BredsFor.findAll()) || message.noRecords('BredsFor');
  } catch (e) {
    return message.error;
  }
};

const getOneBredFor = async (bredForId) => {
  try {
    return (
      (await BredsFor.findByPk(bredForId)) ||
      message.noRecords('BredFor', bredForId)
    );
  } catch (e) {
    return message.error;
  }
};

const postOneBredFor = async (newBredFor) => {
  try {
    return await BredsFor.create(newBredFor);
  } catch (e) {
    return message.error;
  }
};

const patchOneBredFor = async (bredForPortion, bredForId) => {
  try {
    await BredsFor.update(bredForPortion, { where: { id: bredForId } });
    return message.updatedRecord('BredFor', bredForId);
  } catch (e) {
    return message.updatedNoRecord('BredFor', bredForId);
  }
};

const deleteOneBredFor = async (bredForId) => {
  try {
    await BredsFor.destroy(bredForId);
    return message.deletedRecord('BredFor', bredForId);
  } catch (e) {
    return message.deletedNoRecord('BredFor', bredForId);
  }
};

module.exports = {
  getAllBredsFor,
  getOneBredFor,
  postOneBredFor,
  patchOneBredFor,
  deleteOneBredFor,
};
