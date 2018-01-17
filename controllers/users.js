var mongoose = require('mongoose')
var User = mongoose.model('user')

module.exports = {
  create: (req, res) => {
    user = new User(req.body);
    user.save((err) => {
      if(err) {
        console.log("ERROR");
        res.send(err)
      } else {
        console.log("SUCCESS");
        res.send(user);
      }
    })
  },
  index: (request, response) => {
    User.find({}, function(err, users){
      if(err) {
        response.send(err);
      } else {
        response.send(users);
      }
    })
      
  },
  delete: (req, res) => {
    console.log("DELETE "+req.params.id);
    User.remove({_id: req.params.id}, function(err){
      if(err) {
        res.send("Error "+err)
      }
      else {
        res.send({"status":"success"})
      }
    });
  },
  update: (req, res) => {
    User.update({_id: req.body._id }, req.body, function() {
      if(err) {
        res.send("ERROR "+err);
      }
      else {
        res.send("USER UPDATED");
      } 
    });
  }
 }