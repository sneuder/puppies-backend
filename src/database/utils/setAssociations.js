const attrModels = require('../../constants/models');

const temps = async (postedDog, dogAttrs) => {
  dogAttrs.forEach(async dogAttr => {
    const [newRecord, oldRecord] = await attrModels.temperament.findOrCreate({
      where: { temperament:  dogAttr}
    });

    await postedDog.addTemps(newRecord);
  });
};

const breeds = async (postedDog, dogAttrs) => {
  dogAttrs.forEach(async dogAttr => {
    const [newRecord, oldRecord] = await attrModels.breed_group.findOrCreate({
      where: { breed_group:  dogAttr}
    });

    await postedDog.addBreeds(newRecord);
  });
};

const bredsfor = async (postedDog, dogAttrs) => {
  dogAttrs.forEach(async dogAttr => {
    const [newRecord, oldRecord] = await attrModels.bred_for.findOrCreate({
      where: { bred_for:  dogAttr}
    });

    await postedDog.addBredsfors(newRecord);
  });
};

const countries = async (postedDog, dogAttrs) => {
  dogAttrs.forEach(async dogAttr => {
    const [newRecord, oldRecord] = await attrModels.origin.findOrCreate({
      where: { origin:  dogAttr}
    });

    await postedDog.addCountries(newRecord);
  });
};

module.exports = {
  temps,
  breeds,
  bredsfor,
  countries
};