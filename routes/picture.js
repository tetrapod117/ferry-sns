var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var alpaka = 'http://localhost:3000/picture/alpaka.jpg';
  res.render('picture', { pic: alpaka });
});

module.exports = router;
