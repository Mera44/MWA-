
//Using Stream
const server = require('http').createServer();
const fs = require('fs');

server.on('request',(req,res)=>{
    const image = fs.createReadStream('./large.jpg');
    image.pipe(res);
    
}).listen(8000);

//Using Buffer
//const server = require('http').createServer();
//const fs = require('fs');
// server.on('request',(req,res)=>{
   
//    fs.readFile('./large.jpg', (err,data)=>{
//         if(err)throw err;
//        res.end(data);
//     })}).listen(8080);
