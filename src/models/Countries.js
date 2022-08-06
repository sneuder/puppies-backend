const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Countries = sequelize.define('countries', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Countries;
};