var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist'));
require('./config/mongoose_setup.js');
require('./config/routes.js')(app);
mongoose.connect('mongodb://localhost/music_db', err => {
  console.log(err ||  `MongoDB connected`);
})


app.listen(8000, function() {
    console.log("listening on port 8000");
})