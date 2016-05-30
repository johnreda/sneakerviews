var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');



app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'));



//========== CONFIGURE DB =================
mongoose.connect('mongodb://localhost/');
var db = mongoose.connection;

db.on('error', function (err){
	console.log ("MONGOOSE ERROR: " + err);
});
db.once('open', function (){
	console.log("MONGOOSE CONNECTION SUCCESSFUL!");
});



//=========== SCHEMAS ======================
var article = require('./models/article.js');
var comments = require('./models/comments.js');