const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Countries = sequelize.define('countries', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Countries;
};
