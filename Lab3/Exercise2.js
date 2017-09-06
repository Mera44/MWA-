
//console.log()
const server = require('http').createServer();
const fs = require('fs');
//const path = require('path');

// server.on('request',(req,res)=>{
//     const image = fs.createReadStream('./bigimage.jpg');
//     image.pipe(res);
    
// }).listen(8000);

server.on('request',(req,res)=>{
   
   fs.readFile('./bigimage.jpg', (err,data)=>{
        if(err)throw err;
       res.end(data);
    })}).listen(8080);
