const message = require('../utils/messages');

const { Temps } = require('../constants/models');
const { Op } = require('sequelize');

const getAllTemps = async () => {
  try {
    return (await Temps.findAll()) || message.noRecords('Temps');
  } catch (e) {
    return message.error;
  }
};

const getOneTemp = async (tempId) => {
  try {
    return (await Temps.findByPk(tempId)) || message.noRecord('Temp', tempId);
  } catch (e) {
    return message.error;
  }
};

const postOneTemp = async (temp) => {
  try {
    const [record, created] = await Temps.findOrCreate({
      where: {
        name: {
          [Op.iLike]: temp.name,
        },
      },
      defaults: temp,
    });

    if (created) return record;
    return message.attributeElement('Temperament', temp.name);
  } catch (e) {
    return message.error;
  }
};

const patchOneTemp = async (tempId, tempPortion) => {
  try {
    await Temps.update(tempPortion, {
      where: { id: tempId },
    });
    return message.updatedRecord('Temp', tempId);
  } catch (e) {
    return message.error;
  }
};

const deleteOneTemp = async (tempId) => {
  try {
    await Temps.destroy({
      where: { id: tempId },
    });

    return message.deletedRecord('Temp', tempId);
  } catch (e) {
    return message.deletedNoRecord('Temp', tempId);
  }
};

module.exports = {
  getAllTemps,
  getOneTemp,
  postOneTemp,
  patchOneTemp,
  deleteOneTemp,
};
