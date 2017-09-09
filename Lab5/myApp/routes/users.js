var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs');

//fetching the user info using promise

 const promise = fetch('http://jsonplaceholder.typicode.com/users/');

/* GET users listing. */
router.get('/', function(req, res, next) {
     promise.then(data => data.json())
     .then(s => res.render('users',{title: s}))

    // fetching the user info using observables
    //  Rx.Observable.fromPromise(promise)
    //  .map(data => data.json())
    //  .subscribe(s => console.log(s.json()));

    // fetching the user info using Async & Await
//     async function reader(){
//             try {
//                 let results = await promise();
//                 res.render('users',{title : results.json()})
                
//             } catch (error) {
//                 console.log(error);
//             }
//     }
//  reader();

});
   



module.exports = router;
