var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('login', { title: 'News Letter' , csrftoken: req.csrfToken()});
});
router.post('/', function(req, res, next) {
    req.assert('email','A valid email is required').notEmpty().isEmail();
    var error = req.validationErrors();
    //console.log('vR====>'+error.toString());
    if(error){
       return res.render('error', { error:error, message:'Wrong Email' });
    }
    fs.appendFile('public/subscribers.txt', "  "+req.body.email , function (err) {
        if (err) {
         return  next(err);
        } else {
            res.render('thankyou', { title: req.body.email });
        }
      });
   
  });
module.exports = router;
