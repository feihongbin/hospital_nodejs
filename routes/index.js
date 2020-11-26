var express = require('express');
var router = express.Router();
var dbConfig = require('../util/dbconfig')

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  var sql = "select * from sss1";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send({
        'list': data
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callBack)
});



module.exports = router;
