var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoClient.connect('mongodb://localhost:27017/homework',function(err,db){
    if(err) throw err;
    console.log('coolection---->'+db.collection('homework7').findOne());
    db.collection('homework7').findOne({	"message" : "ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03"}, function(err,doc){
    
    if(err) throw err;
    else{
    
      const x = 'ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03';
      let decrypted = decipher.update(x, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      //console.log('decrypted===>'+ decrypted);
      res.render('secret',{title:decrypted});
    }
    
    })
    db.close();
  })
  
});

module.exports = router;
