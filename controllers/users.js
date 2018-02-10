var mongoose = require('mongoose')
var User = mongoose.model('user')

module.exports = {
  create: function(req, res){
    user = new User(req.body);
    user.save((err) => {
      if(err) {
        console.log(err);
      } else {
        console.log("SUCCESS");
        res.json(user);
      }
    })
  },
  
  getUser: function(req, res){
    console.log("INSIDE GETUSER "+req.body.username);
    User.find({username:req.body.username}, function(err, user){
      if(user.length > 0) {
        console.log(user);
        if(user[0].password != req.body.password){
          var message = "password is not correct";
          res.json(message);
        }
        else{
          res.json(user[0]);
      }
     } 
     else {
        console.log(err);
        var message_two = "Could not find username"
        res.json(message_two)
      }
    })
      
  },

  delete: function(req, res) {
    console.log("DELETE "+req.params.id);
    User.remove({_id: req.params.id}, function(err){
      if(err) {
        console.log(err);
      }
      else {
        res.send({"status":"success"})
      }
    });
  },
  update: function(req, res) {
    User.update({_id: req.body._id }, req.body, function() {
      if(err) {
        console.log(err);
      }
      else {
        res.send("USER UPDATED"); 
      } 
    });
  }
 }