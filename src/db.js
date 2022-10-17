const associationsPuppies = require("./models/associations/index");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("puppies", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

// linking models to database
const requireModels = ["Dogs", "Temps", "Countries", "Breeds", "BredsFor"];
requireModels.forEach((requiredModel) => {
  const model = require(`./models/${requiredModel}`);
  model(sequelize);
});

// associations
associationsPuppies(sequelize);

module.exports = sequelize;
