var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var request = require('request');
var cheerio = require('cheerio');	



app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'));



//========== CONFIGURE DB =================
mongoose.connect('mongodb://localhost/classconnection'); //<---NEED TO UPDATE WITH THE RIGHT MONGODB URL
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



//=========== ROUTES ======================



app.listen(3000, function() {
  console.log('App running on port 3000!');
});


