const os = require('os');
const totalmem= os.totalmem()/1000000000;
const cpu = os.cpus().length;
const Rx = require('@reactivex/rxjs');

var checkSystem = new Promise(function(resolve,reject){
        if(totalmem >=2 && cpu >2){
            resolve('system is checked succesfully ');
        }
        else if(totalmem>2){
             reject('This is app needs at least 2GB of RAM');
            } 
            else{
            reject ('Processor is not supported');
            }
        } );
    
        
   Rx.Observable.fromPromise(checkSystem)
   .subscribe(msg=>console.log(msg));
   console.log('Checking your system');
