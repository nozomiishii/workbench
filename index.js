const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res)=>{
  let filePath = path.join(__dirname, 'public', req.url === '/' ? "index.html" : req.url);
  console.log(filePath);

  let extname = path.extname(filePath);
  let contentType = 'text/html';

  res.end();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, ()=> console.log(`server running on port${PORT}`));
