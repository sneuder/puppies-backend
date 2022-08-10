const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Countries = sequelize.define('countries', {
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Countries;
};