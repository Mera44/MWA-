var express = require('express');
var router = express.Router();
const path = 'mongodb://localhost:27017/finder';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('add',{title:'Welcome To Finder'});
});
router.post('/', function(req, res, next) {
  req.mongo.connect(path,function(err,db){
    if(err) throw err;

   // console.log("service---->"+typeof(parseFloat(req.body.long)));
   // console.log("service---->"+ typeof(req.body.long));
    var doc = [{'name':req.body.servicename,'category':req.body.categoryname,'location':[parseFloat(req.body.long),parseFloat(req.body.lat)]}];
    
    db.collection('service').insert(doc,function(err,docinserted){
      if(err) throw err;
      console.dir('success '+JSON.stringify(docinserted));
    
      db.close();
      res.render('index',{title:'Finder', service:'Added'});
    })


  }

)});

module.exports = router;
