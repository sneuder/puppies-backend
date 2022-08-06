const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BredsFor = sequelize.define('bredsfor', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    bredfor: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return BredsFor;
};