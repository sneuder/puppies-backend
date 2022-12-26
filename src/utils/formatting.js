const attributes = ['temperament', 'breed_group', 'origin'];
const { v4: uuidv4 } = require('uuid');

const postDog = (dog) => {
  return {
    formatedDog: formatDog(dog),
    attributes: postAttributes(dog),
  };
};

// Dependencies functions

const formatDog = (dog) => {
  return {
    id: uuidv4(),
    name: dog.name,
    lifespan: dog.life_span,
    image: dog.image.url,
  };
};

const postAttributes = (dog) => {
  let attrs = {};

  attributes.forEach((attribute) => {
    if (dog[attribute] && dog[attribute] !== '') {
      const dogAttrs = dog[attribute].replace(/,/g, '').split(' ');

      if (attribute === 'origin') attribute = 'countries';
      if (attribute === 'temperament') attribute = 'temperaments';
      if (attribute === 'breed_group') attribute = 'breeds';

      attrs[attribute] = dogAttrs;
    }
  });

  return attrs;
};

module.exports = {
  postDog,
};
