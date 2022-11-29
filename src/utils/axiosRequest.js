const axios = require('axios');

const axiosRequest = async (method, url) => {
  try {
    const res = await axios({
      method: method,
      url: url,
    });

    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = axiosRequest;
