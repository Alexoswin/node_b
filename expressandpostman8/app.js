
const express = require("express"); // importing express
 // creating express initalized app
const app = express();
const port = 3000;
const path =require('path')

//for serving static files
app.use('/index', express.static('index'))


//set the template engine as pug 
app.set('view engine' ,'pug')

//set the views directory 
app.set('views',path.join(__dirname,"views"));

//pug demo endpoint 


app.get("/demo", (req,res)=>{
   res.status(200).render('demo',{ title: 'hey' , message:'hello welcome to pug '});
});


app.get("/demo", (req,res)=>{
   res.status(200).send("this is the first home page with pug");
});

// running arrow function which has req and res arguiments
//geting request on the given endpont
app.get("/",(req,res)=>{
   res.send("This is my first express app  ,<br/> home page")
});

app.get("/about",(req,res)=>{
   res.send("This is about page with express")
});

app.get("/new",(req,res)=>{
   res.send("This is new page with express")
});

app.post("/post",(req,res)=>{
   res.send("This is post endpoint of postam page with express")
});
//selecting port 
//use nodemon

app.listen(port,()=>{
    console.log(`this applicaton started sucessfully on ${port}`)
})



