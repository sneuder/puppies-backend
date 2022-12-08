const attrModels = require('../../constants/models');

const temperaments = async (postedDog, dogAttrs) => {
  for (let i = 0; i < dogAttrs.length; i++) {
    const [newRecord, created] = await attrModels.temperament.findOrCreate({
      where: { temperament: dogAttrs[i] },
    });

    await postedDog.addTemps(newRecord);
  }
};

const breeds = async (postedDog, dogAttrs) => {
  for (let i = 0; i < dogAttrs.length; i++) {
    const [newRecord, created] = await attrModels.breed_group.findOrCreate({
      where: { breed_group: dogAttrs[i] },
    });

    await postedDog.addBreeds(newRecord);
  }
};

const countries = async (postedDog, dogAttrs) => {
  for (let i = 0; i < dogAttrs.length; i++) {
    const [newRecord, created] = await attrModels.countries.findOrCreate({
      where: { countries: dogAttrs[i] },
    });

    await postedDog.addCountries(newRecord);
  }
};

module.exports = {
  temperaments,
  breeds,
  countries,
};
