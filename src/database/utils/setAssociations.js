const attrModels = require('../../constants/models');

const temperaments = (postedDog, dogAttrs) => {
  dogAttrs.forEach(async (dogAttr) => {
    const [newRecord, oldRecord] = await attrModels.temperament.findOrCreate({
      where: { temperament: dogAttr },
    });

    await postedDog.addTemps(newRecord);
  });
};

const breeds = (postedDog, dogAttrs) => {
  dogAttrs.forEach(async (dogAttr) => {
    try {
      const [newRecord, oldRecord] = await attrModels.breed_group.findOrCreate({
        where: { breed_group: dogAttr },
      });
      await postedDog.addBreeds(newRecord);
    } catch (e) {
      // console.log(e);
    }
  });
};

const countries = (postedDog, dogAttrs) => {
  dogAttrs.forEach(async (dogAttr) => {
    const [newRecord, oldRecord] = await attrModels.countries.findOrCreate({
      where: { countries: dogAttr },
    });

    await postedDog.addCountries(newRecord);
  });
};

module.exports = {
  temperaments,
  breeds,
  countries,
};
