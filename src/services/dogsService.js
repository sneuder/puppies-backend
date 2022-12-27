const Database = require('../database/Dogs');
const { Op } = require('sequelize');
const { Temps } = require('../constants/models');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const getAllDogs = (queries) => {
  if (queries.search === '') delete queries.search;
  if (queries.order !== 'desc' && queries.order !== 'asc') delete queries.order;

  const searchConditions = {
    distinct: true,
    where: {},
    include: [
      {
        model: Temps,
      },
    ],
  };

  Object.keys(queries).forEach((key) => {
    if (key === 'search') {
      return (searchConditions.where.name = {
        [Op.iRegexp]: queries[key],
      });
    }

    if (key === 'page') {
      searchConditions.offset = (queries[key] - 1) * 10;
      return (searchConditions.limit = 10);
    }

    if (key === 'order') {
      const orderValue = queries[key].toUpperCase();
      searchConditions.order = [['name', orderValue]];
    }

    if (key === 'filter') {
      searchConditions.include = [
        {
          model: Temps,
          where: {
            name: {
              [Op.iRegexp]: queries[key],
            },
          },
        },
      ];
    }
  });

  return Database.getAllDogs(searchConditions);
};

const getOneDog = (dogId) => {
  return Database.getOneDog(dogId);
};

const postOneDog = (dog) => {
  return axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then(({ data }) => {
      dog.id = uuidv4();
      dog.image = data.message;
      return Database.postOneDog(dog);
    });
};

const patchOneDog = (dogPortion, dogId) => {
  return Database.patchOneDog(dogPortion, dogId);
};

const deleteOneDog = (dogId) => {
  return Database.deleteOneDog(dogId);
};

module.exports = {
  getAllDogs,
  getOneDog,
  postOneDog,
  patchOneDog,
  deleteOneDog,
};
