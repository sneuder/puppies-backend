const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Breeds = sequelize.define('breeds', {
    breed_group: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Breeds;
};