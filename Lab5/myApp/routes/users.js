var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs');

//fetching the user info using promise

 const promise =  fetch('http://jsonplaceholder.typicode.com/users/');
 
//  const asynpromise = new Promise((reject,resolve)=>{
//      fetch('http://jsonplaceholder.typicode.com/users/')
//      .then(res =>{
//      if (res.ok) {
//         return res.json();
//     }
//     else {
//         reject("Bad Data");
//     }
// }).then(data => resolve(data));
// });



  // fetching the user info using Async & Await
//   async function reader(){
//     try {
//         let results = await asynpromise;
//        // res.render('users',{title : results});
//        return results;
        
//     } catch (error) {
//       console.log(error);
//     }
// }
/* GET users listing. */
router.get('/', function(req, res, next) {
    //  promise.then(data => data.json())
    //  .then(s => res.render('users',{title: s}))

    // fetching the user info using observables
     Rx.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/users/'))
    .subscribe(s => res.render('users', {title: s}));

  
        // reader().then(data => res.render('users', {title:data}));
    });


module.exports = router;
