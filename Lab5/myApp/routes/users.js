var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs');

//fetching the user info using promise

 const promise = function (){
     return fetch('http://jsonplaceholder.typicode.com/users/');
 };
 const asynpromise = new Promise((reject,resolve)=>{
     fetch('http://jsonplaceholder.typicode.com/users/')
       .then(data => data.json())
       .then(s => resolve(s))
});
/* GET users listing. */
router.get('/', function(req, res, next) {
    //  promise.then(data => data.json())
    //  .then(s => res.render('users',{title: s}))

    // fetching the user info using observables
    //  Rx.Observable.fromPromise(asynpromise)
    
    //  .subscribe(s => console.log(s.json()));

    // fetching the user info using Async & Await
    async function reader(){
            try {
                let results = await asynpromise;
                res.render('users',{title : results});
                
            } catch (error) {
              console.log(error);
            }
        }
        reader ();
    });


module.exports = router;
