const axios = require('axios');

const axiosConfig = () => {
  axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
  axios.defaults.headers['x-api-key'] = '6295a5d3-c722-43ec-9da4-02d4eececa8d';
};

module.exports = axiosConfig;
