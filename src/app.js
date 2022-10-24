const express = require("express");
const app = express();

// get routes
const database = require("./routes/database");
const dogs = require("./routes/dogs");
const breeds = require("./routes/breeds");
const temps = require("./routes/temps");
const bredsFor = require("./routes/bredsFor");
const countries = require("./routes/countries");

// get middlewares
const auth = require("./middlewares/auth");

// body-parser
app.use(express.json());

// middlewares
app.use(auth);

// adding routes
app.use("/api", database);
app.use("/api", dogs);
app.use("/api", breeds);
app.use("/api", bredsFor);
app.use("/api", temps);
app.use("/api", countries);

module.exports = app;
