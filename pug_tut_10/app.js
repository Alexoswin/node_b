const express = require('express');
const path = require('path');
const app = express();
const port =500;

// Serving static files
app.use('/static', express.static('static'));

// Setting the template engine as pug
app.set('view engine', 'pug');

// Setting the views directory
app.set('views', path.join(__dirname, 'views'));

// Route handling
app.get('/', (req, res) => {
    res.status(200).render('index'); // connecting 'index.pug' file in the 'views' folder
});

// Starting the server
app.listen(port, () => {
    console.log("Application is running at local server port  500");
});