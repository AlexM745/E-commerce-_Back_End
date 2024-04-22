
// importing express
const express = require('express');
// importing the routes from thr routes folder
const routes = require('./routes');
// importing the sequelize connection
const sequelize = require('./config/connection');

// the constant app is now express
const app = express();
// this constant is the port
const PORT = process.env.PORT || 3001;
// 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
