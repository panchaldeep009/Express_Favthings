var express = require('express');
var router = express.Router()
var connect = require('../utils/sqlconnect');

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {};
  connect.query("SELECT content_key, content_value FROM tbl_content", (error, result) => {
    if(error){
      throw error;
    } else {
      result.forEach(row => {
        data = {
          ...data,
          [row.content_key] : row.content_value,
          all_wine: []
        }
      });
      connect.query("SELECT * FROM tbl_wines", (error, result) => {
        if(error){
          throw error;
        } else {

          const types = [];

          result.forEach(row => {
            if(!types.includes(row.wine_type)){
              types.push(row.wine_type)
            }
          });


          data = {
            ...data,
            all_wine: result,
            types
          }
          
          res.render('index', {...data});
        }
      })
    }
  })
});

module.exports = router;
