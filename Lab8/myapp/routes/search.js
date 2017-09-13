var express = require('express');
var router = express.Router();
const path = 'mongodb://localhost:27017/finder';
var geolocation = require('geolocation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('search',{title:'Finder'});
});
router.post('/', function(req, res, next) {
  req.mongo.connect(path,function(err,db){
    if(err) throw err;
  geolocation.getCurrentPosition(success,fail);
    function success(position){
        console.log("Longitude-->"+position.coords.longitude);
        console.log("Latitude-->"+position.coords.latitude);
    }
    function fail(msg){
        console.log(msg.code+msg.mesage);
    }
    //db.collection('service').find({$and:[{category:'Hotel'},{location:{$near:[-122.21046447753906,37.844658075859975]}}]}).limit(2).pretty()
   
    })});

module.exports = router;
