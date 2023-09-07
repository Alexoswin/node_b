const express = require('express');
const path = require('path');
const app = express();
const port =500;

// Serving static files
app.use('/static', express.static('static'));
app.use(express.urlencoded())

// Setting the template engine as pug
app.set('view engine', 'pug');

// Setting the views directory
app.set('views', path.join(__dirname, 'views'));

// Route handling
app.get('/', (req, res) => {
    res.status(200).render('index'); // connecting 'index.pug' file in the 'views' folder
});

app.post("/",(req,res)=>{
    console.log(req.body)
    const params ={'message':'your form has been submitted sucessfully ', "contact":con}
    res.status(200).render('index.pug ',params)

})

// Starting the server
app.listen(port, () => {
    console.log("Application is running at local server port  500");
});