const attributes = ['temperament', 'breed_group', 'bred_for', 'origin'];

const postDog = (dog) => {
  return {
    formatedDog: formatDog(dog),
    attributes: postAttributes(dog),
  };
};

const formatDog = (dog) => {
  return {
    id: dog.id,
    name: dog.name,
    life_span: dog.life_span,
    image: dog.image.url,
  };
};

const postAttributes = (dog) => {
  let attrs = {
    temperament: [],
    breed_group: [],
    bred_for: [],
    origin: [],
  };

  attributes.forEach((attribute) => {
    if (dog[attribute] && dog[attribute] !== '') {
      const dogAttrs = dog[attribute].replace(/,/g, '').split(' ');
      dogAttrs.forEach((dogAttr) => attrs[attribute].unshift(dogAttr));
    }
  });

  return attrs;
};

module.exports = {
  postDog,
};
