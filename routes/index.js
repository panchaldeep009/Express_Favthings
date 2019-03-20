var express = require('express');
var router = express.Router();

var connect = require('../utils/sqlconnect');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  connect.query("SELECT name, avatar FROM hero", (error, result) => {
    if(error){
      throw error;
    } else {
      console.log(result);
      res.render('index', {avatar: result})
    }
  })
});

module.exports = router;
