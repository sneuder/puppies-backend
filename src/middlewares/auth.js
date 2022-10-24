const auth = (req, res, next) => {
  if (req.query.admin === "true") {
    console.log("Working");
    return next();
  }

  res.send("No auth");
};

module.exports = auth;
