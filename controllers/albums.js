var mongoose = require('mongoose')
var Album = mongoose.model('album')

module.exports = {
  create: function(req, res) {
    console.log("***** Inside albums create ******");
    console.log(req.body);
    album = new Album(req.body);
    album.save(function(err) {
      if(err) {
        console.log("ERROR");
        res.send(err)
      } else {
        console.log("SUCCESS");
        res.send(album);
      }
    })
  },
  index: (request, response) => {
    Album.find({}, function(err, albums){
      if(err) {
        response.send(err);
      } else {
        response.send(albums);
      }
    })
      
  },
  delete: (req, res) => {
    console.log("DELETE "+req.body._id);
    Album.remove({_id: req.body._id}, function(err){
      if(err) {
        res.send("Error "+err)
      }
      else {
        res.send({"status":"success"})
      }
    });
  },
  update: (req, res) => {
    Album.update({_id: req.body._id }, req.body, function() {
      if(err) {
        res.send("ERROR "+err);
      }
      else {
        res.send("USER UPDATED");
      } 
    });
  }
 }