const app = require('./src/app');
const sequelize = require('./src/db');

// axios configuration
const axiosConfig = require('./src/utils/axiosConfig');
axiosConfig();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server listening'));
sequelize.sync();