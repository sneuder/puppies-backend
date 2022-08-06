const axios = require('axios');

const axiosRequest = async (method, url, data) => {
  const res = await axios({
    method: method,
    url: url
  })

  return res.data;
};

module.exports = axiosRequest;