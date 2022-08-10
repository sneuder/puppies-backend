const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Temps = sequelize.define('temps', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    temperament: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Temps;
};