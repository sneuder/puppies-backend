const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Dogs = sequelize.define('dogs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Dogs;
};
