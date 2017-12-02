var express = require('express');
var router = express.Router();
var fs = require('fs');
var connection = require('../mysqlConnection');

/* GET home page. */
router.get('/', function(req, res, next) {

  var query = 'SELECT * FROM timeline_photo　ORDER BY timeline_id DESC';
  connection.query(query, function(err, rows) {
    console.log(rows);
  res.render('index', {
    list: rows
    });
  });
});

module.exports = router;
