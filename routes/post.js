var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.redirect(302, "..");
  res.send(req.body);
});

module.exports = router;