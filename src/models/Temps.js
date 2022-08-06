const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Temps = sequelize.define('temps', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    temp: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Temps;
};