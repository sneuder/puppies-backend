const attrModels = require('../../constants/models');

const temps = (postedDog, temps) => {
  temps.forEach(async temp => {
    const [newTemp, oldTemp] = await attrModels.temperament.findOrCreate({
      where: { temperament:  temp},
    });
  
    await postedDog.addTemp(newTemp);
  });
};

const breeds = (postedDog, temps) => {
  temps.forEach(async temp => {
    const [newTemp, oldTemp] = await attrModels.temperament.findOrCreate({
      where: { temperament:  temp},
    });
  
    await postedDog.addBreed(newTemp);
  });
};

module.exports = {
  temps,
  breeds
};