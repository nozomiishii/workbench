const http = require('http');

const server = http.createServer((req, res)=>{
  if(req.url==="/"){
    res.write('tasty pussy')
    res.end();
  }

  if(req.url==="/pussy"){
    res.write('she needs dick')
    res.end();
  }
})

server.listen('1919');
console.log('listening on port 1919');

