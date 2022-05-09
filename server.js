//import express
const express = require('express');

//import routes
const htmlRoutes = require('./routes/htmlroutes');
const apiRoutes = require('./routes/api/apiroutes');

// Express Port
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//route middleware
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//confirmation server is running
app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
});