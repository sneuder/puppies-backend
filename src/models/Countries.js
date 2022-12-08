const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Countries = sequelize.define('countries', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    countries: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Countries;
};
