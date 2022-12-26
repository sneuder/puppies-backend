const { v4: uuidv4 } = require('uuid');

class Dog {
  constructor(dog) {
    this.id = uuidv4();
    this.name = dog.name;
    this.life_span = dog.life_span;
    this.attributes = dog.attributes;
  }
}

module.exports = Dog;
