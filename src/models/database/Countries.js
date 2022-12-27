const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Countries = sequelize.define('countries', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Countries;
};
