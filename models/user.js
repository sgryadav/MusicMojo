var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
 username: {type: String, required: true},
 firstname :{type: String, required: true},
 email: {type: String, required: true},
 password :{type: String, required: true},
 score : [{type: Number}]
});
mongoose.model('user', userSchema); 

