const fs = require('fs');
const http = require('http').createServer();
const url = require('url');
const {fork} = require('child_process');
//console.log(url.parse('http://localhost:8000/?url=file.txt',true).query.url);


http.on('request',(req,res)=>{
    
    // const myurl = url.parse(req.url,true);
    // let file = myurl.query.url;
    // const readable = fs.createReadStream('./'+file);
    // readable.pipe(res);
//////////////////////////////////////////////////////////////
    //Using cloning
    const myurl = url.parse(req.url,true);
    let file = myurl.query.url;
    console.log('===>yes');
    const childprocess = fork('readfile.js');
    
    childprocess.send(file);
    
    childprocess.on('message',(msg) =>{
        //console.log());
        
        //console.log(msg);
        
    });
    
}).listen(5000);