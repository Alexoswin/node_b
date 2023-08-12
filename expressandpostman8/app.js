
const express = require("express"); // importing express
 // creating express initalized app
const app = express();


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
const port = 80;
app.listen(port,()=>{
    console.log(`this applicaton started sucessfully on ${port}`)
})



