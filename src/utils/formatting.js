const postDog = (dog) => {
  return {
    id: dog.id,
    name: dog.name,
    life_span: dog.life_span,
    image: dog.image.url
  }
};

const postDogs = (dogs) => {
  return dogs.map(dog => {
    return {
      id: dog.id,
      name: dog.name,
      life_span: dog.life_span,
      image: dog.image.url
    }
  });
};

const postAttributes = (dogs, attribute) => {
  let attrs = [];

  // filterting to have no repeated information
  dogs.forEach(dog => {
    if (dog[attribute] && dog[attribute] !== ''){
      const dogAttrs = dog[attribute].replace(/,/g, "").split(" ");
      dogAttrs.forEach(dogAttr => !attrs.includes(dogAttr) && attrs.unshift(dogAttr));
    }
  });

  // formatting data
  return attrs.map(atrr => {
    return {[attribute]: atrr}
  });
}

module.exports = {
  postDog,
  postDogs,
  postAttributes
};