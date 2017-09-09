const fs = require('fs');
const url = require('url');

var readfile = (file)=>{
// const myurl = url.parse(link.url,true);
// let file = myurl.query.url;
const readable = fs.createReadStream('./'+file);
//console.log('readable '+readable);
return readable;
};

process.on('message', msg =>{
    console.log('fromchild ===>'+msg);
    const result = readfile(msg);

    process.send(result.toString());
});
