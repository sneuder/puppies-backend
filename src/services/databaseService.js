const axiosRequest = require('../utils/axiosRequest');

const postDatabase = () => {
  return axiosRequest('GET', '/breeds');
};

const deleteDatabase = () => {

};

module.exports = {
  postDatabase,
  deleteDatabase
}