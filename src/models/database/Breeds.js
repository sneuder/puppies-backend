const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Breeds = sequelize.define('breeds', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Breeds;
};
