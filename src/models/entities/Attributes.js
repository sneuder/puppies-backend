// model only used for database population
const Attribute = require('./Attribute');

class Attributes {
  constructor(dog) {
    this.temps = [];
    this.breeds = [];
    this.countries = [];

    this.setAttributes(dog);
  }

  setAttributes(dog) {
    const attrsKeys = ['temperament', 'breed_group', 'origin'];
    let attrs = {};

    attrsKeys.forEach((attrKey) => {
      if (dog[attrKey] && dog[attrKey] !== '') {
        const dogAttrs = dog[attrKey].replace(/,/g, '').split(' ');

        if (attrKey === 'temperament') attrKey = 'temps';
        if (attrKey === 'origin') attrKey = 'countries';
        if (attrKey === 'breed_group') attrKey = 'breeds';

        attrs[attrKey] = dogAttrs.map((dogAttr) => Attribute(dogAttr));
      }

      attrs[attrKey] = [];
    });

    this.temps = attrs.temps;
    this.breeds = attrs.breeds;
    this.countries = attrs.countries;
  }
}

module.exports = {
  Attributes,
};
