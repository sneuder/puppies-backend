const jwt = require('jsonwebtoken');

const admin = (req, res, next) => {};

const user = (req, res, next) => {
  if (!req.headers['authorization']) return res.sendStatus(403);
  const token = req.headers['authorization'].replace('Bearer ', '');

  jwt.verify(token, 'secret', (err, authData) => {
    if (err) res.sendStatus(403);
    next();
  });
};

module.exports = {
  admin,
  user,
};
