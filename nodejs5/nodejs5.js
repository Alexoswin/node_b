// custom backed  
const http = require('http');
const fs  = require('fs');
 
 let hostname = ('127.0.0.1'); // local host 
 const port = 3000;
 const home = fs.readFileSync('./index.html')
 const about = fs.readFileSync('./about.html')
 const  contact = fs.readFileSync('./contact.html')


 const server = http.createServer((req,res)=>{

    console.log(req.url);
    url = req.url
    
    res.statusCode = 404;
    res.setHeader('content-Type', 'text/html');
    if (url =='/'){
        res.end(home);
    }
    else if (url =='/contact.html'){
        res.end(contact)
    }
    else if(url =='/about.html'){
        res.end(about)
    }
    else{
        res.end("<h1>404 not found<h1>")
    }
    
   
 });

server.listen(port,hostname,() =>{
    console.log(`server running at http://${hostname}:${port}/`)
})


