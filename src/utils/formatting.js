const postDog = (dog) => {
  return {
    id: dog.id,
    name: dog.name,
    life_span: dog.life_span,
    image: dog.image.url
  }
};

const postTemps = (dogs) => {
  let temps = [];
  dogs.forEach(dog => {
    
  });
}

module.exports = {
  postDog
}