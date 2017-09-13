var express = require('express');
var router = express.Router();
const path = 'mongodb://localhost:27017/finder';
var geolocation = require('geolocation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('search',{title:'Finder'});
});
router.post('/', function(req, res, next) {
  //console.log('Posted--->'+req.body.long);
  req.mongo.connect(path,function(err,db){
    if(err) throw err;
    var query ={$and:[{category:req.body.category},{location:{$near:[req.body.long,req.body.lat]}}]};

  db.collection('service').find(query).toArray(function(err, result) {
    if (err) throw err;
    //console.dir(result);
    db.close();
    res.render('index',{title:"Finder",service:result});
    });
  })});

module.exports = router;
