require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/db");

// axios configuration
const axiosConfig = require("./src/utils/axiosConfig");
axiosConfig();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server listening"));
sequelize.sync();
