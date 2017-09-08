const os = require('os');
const totalmem= os.totalmem()/1000000000;
const cpu = os.cpus().length;

var checkSystem = function (){
    return new Promise(function(resolve,reject){
        if(totalmem >=2 && cpu >2){
            resolve('system is checked succesfully ');
        }
        else if(totalmem>2){
             reject('This is app needs at least 2GB of RAM');
            } 
            else{
            reject ('Processor is not supported');
            }
        }
        );
    }

    checkSystem()
     .then(msg=>console.log(msg))
     .catch(err=>console.log(err));
console.log('Checking your system');
