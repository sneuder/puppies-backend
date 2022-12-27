const attrModels = require('../../constants/models');

const temps = async (postedDog, dogAttrs) => {
  if (dogAttrs.length === 0) return;

  for (let i = 0; i < dogAttrs.length; i++) {
    const [newRecord, created] = await attrModels.Temps.findOrCreate({
      where: { name: dogAttrs[i].name },
      defaults: dogAttrs[i],
    });

    await postedDog.addTemps(newRecord);
  }
};

const countries = async (postedDog, dogAttrs) => {
  if (dogAttrs.length === 0) return;

  for (let i = 0; i < dogAttrs.length; i++) {
    const [newRecord, created] = await attrModels.Countries.findOrCreate({
      where: { name: dogAttrs[i].name },
      defaults: dogAttrs[i],
    });

    await postedDog.addCountries(newRecord);
  }
};

const breeds = async (postedDog, dogAttr) => {
  if (!dogAttr.name) return;

  const [newRecord, created] = await attrModels.Breeds.findOrCreate({
    where: { name: dogAttr.name },
    defaults: dogAttr,
  });

  await postedDog.addBreeds(newRecord);
};

module.exports = {
  temps,
  countries,
  breeds,
};
