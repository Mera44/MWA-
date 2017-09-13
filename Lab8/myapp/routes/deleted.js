var express = require('express');
var router = express.Router();
const path = 'mongodb://localhost:27017/finder';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('delete',{title:'Delete Service'});
});
router.post('/', function(req, res, next) {
  req.mongo.connect(path,function(err,db){
    if(err) throw err;

    //console.log("service---->"+req.body.servicename);
    var query = {'name':req.body.oldname};
    //var operator = {'$set':{'name':req.body.servicename,'category':req.body.categoryname}};
    
    db.collection('service').remove(query,function(err,removed){
      if(err) throw err;
      console.dir('Successfully removed  '+removed);
      db.close();
      res.render('index',{title:'Finder', service:'Deleted'})
    })


  }

)});

module.exports = router;
