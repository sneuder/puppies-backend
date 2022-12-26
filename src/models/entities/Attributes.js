// model only used for database population
const Attribute = require('./Attribute');

class DogAttributes {
  constructor(dog) {
    this.temps = this.setAttributes(dog, 'temperament');
    this.countries = this.setAttributes(dog, 'origin');
    this.breeds = dog.breed_group;
  }

  setAttributes(dog, refDog) {
    if (dog[refDog] && dog[refDog] !== '') {
      const dogAttrs = dog[refDog].replace(/,/g, '').split(' ');
      return dogAttrs.map((dogAttr) => new Attribute(dogAttr));
    }

    return [];
  }
}

module.exports = DogAttributes;
