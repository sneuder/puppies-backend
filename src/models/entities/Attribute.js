// model only used for database population

const { v4: uuidv4 } = require('uuid');

class Attribute {
  constructor(name) {
    this.id = uuidv4();
    this.name = name;
  }
}

module.exports = {
  Attribute,
};
