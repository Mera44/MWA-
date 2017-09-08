const fs = require('fs');
const http = require('http').createServer();
const url = require('url');
//console.log(url.parse('http://localhost:8000/?url=file.txt',true).query.url);


http.on('request',(req,res)=>{
    //console.log(req.url);
    const myurl = url.parse(req.url,true);
    //console.log('printed out===>'+myurl.query.url);
    let file = myurl.query.url;
    const readable = fs.createReadStream('./'+file);
    readable.pipe(res);
    

}).listen(8000);