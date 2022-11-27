const jwt = require('jsonwebtoken');

const postToken = (req, res) => {
  const { email } = req.body;
  jwt.sign({ email }, `secret`, (err, token) => res.json({ token }));
};

module.exports = {
  postToken,
};
