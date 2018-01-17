var mongoose = require('mongoose');
var albumSchema = new mongoose.Schema({
 name: {type: String},
 artist :{type: String},
 year : {type: String}
});
mongoose.model('album', albumSchema); 
