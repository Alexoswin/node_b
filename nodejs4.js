const http = require('http');
const fs = require('fs');
const filetext = fs.readFileSync('nodejs4.html');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(filetext);
});

server.listen(80, '127.0.0.1', () => {
  console.log("Listening on port 80");
});