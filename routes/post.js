var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/', function(req, res, next) {
  res.redirect(302, "..");
  db.one("SELECT $1 AS value", 123)
  .then(function (data) {
      console.log("DATA:", data.value);
  })
  .catch(function (error) {
      console.log("ERROR:", error);
  });

  //res.send(req.body);
});

module.exports = router;