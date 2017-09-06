const script = require('dns');
script.resolve4("www.mum.edu",(err,add)=>{
    console.log(add);
})
