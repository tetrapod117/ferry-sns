var express = require('express');
var router = express.Router();
var moment = require('moment');
var multer = require('multer');
var upload = multer({dest:'./public/keisuke/images/'});
var connection = require('../mysqlConnection');
var fs = require('fs');

/* GET users listing. */
router.post('/', upload.single('image_file'),function(req, res, next) {

var photo_path = ('./public/keisuke/images/'+new Date().getMonth()+new Date().getDay()+new Date().getTime()+'.png');

var user_name = "keisuke";
var user_icon = "";
var travel_id = 1;

if(req.file === undefined){
  var content = req.body.content;
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  var query = 'INSERT INTO timeline (user_name, user_icon, update_at, post_text, travel_id) VALUES ("'+ user_name + '", '+ '"' + user_icon + '",' + '"' + createdAt + '", '+ '"' + content + '", '+'"' + travel_id + '")';
  connection.query(query, function(err, rows) {
    console.log(err);
    res.redirect('..');
  });
} else {
fs.rename('./public/keisuke/images/'+req.file.filename,photo_path);
  var content = req.body.content;
  var createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  var query = 'INSERT INTO timeline_photo (user_name, user_icon, update_at, post_text, photo_path, travel_id) VALUES ("'+ user_name + '", '+ '"' + user_icon + '",' + '"' + createdAt + '", '+ '"' + content + '", '+ '"' + photo_path + '", '+'"' + travel_id + '")';
  connection.query(query, function(err, rows) {
    console.log(err);
    res.redirect('..');
  
  });
}
});

module.exports = router;