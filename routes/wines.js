var express = require('express');
var router = express.Router()
var connect = require('../utils/sqlconnect');

router.get('/:wine_id', function(req, res, next) {
  connect.query(`SELECT * FROM tbl_wines WHERE wine_id =  ${req.params.wine_id}`, (error, result) => {
    if(error){
      throw error;
    } else {
      res.render('wine', { title:  result[0]['wine_name'], ...result[0]});
    }
  })
});


module.exports = router;