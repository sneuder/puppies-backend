const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Temps = sequelize.define('temps', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Temps;
};
