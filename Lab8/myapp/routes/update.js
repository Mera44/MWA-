var express = require('express');
var router = express.Router();
const path = 'mongodb://localhost:27017/finder';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('update',{title:'Update Name and Category'});
});
router.post('/', function(req, res, next) {
  req.mongo.connect(path,function(err,db){
    if(err) throw err;

    //console.log("service---->"+req.body.servicename);
    var query = {'name':req.body.oldname};
    var operator = {'$set':{'name':req.body.servicename,'category':req.body.categoryname}};
    
    db.collection('service').update(query,operator,function(err,numupdated){
      if(err) throw err;
      console.dir('Successfully update  '+numupdated);
      db.close();
      res.render('index',{title:'Finder', service:'Updated'})
    })


  }

)});

module.exports = router;
