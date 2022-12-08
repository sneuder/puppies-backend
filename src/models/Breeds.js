const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Breeds = sequelize.define('breeds', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    breed_group: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Breeds;
};
