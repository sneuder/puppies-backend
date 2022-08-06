const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Breeds = sequelize.define('breeds', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Breed: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Breeds;
};