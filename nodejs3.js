/// synchronous or blocking and asynchronous or non blocking
// synchronous = line by line execution
//asynchronous = line by line not garanteed

const fs = require("fs");
let text =fs.readFile("delete.txt", "utf-8",(a,b) =>{
    console.log(a,b)
} );

console.log("this is a message ")
