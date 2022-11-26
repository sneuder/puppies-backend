const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BredsFor = sequelize.define('bredsfors', {
    bred_for: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return BredsFor;
};
