var path = require('path');

module.exports = function(app) {
var albumsController = require('./../controllers/albums.js');
console.log("**********  Inside albums controller")
app.get('/albums', albumsController.index);
app.post('/albums', albumsController.create);

var usersController = require('./../controllers/users.js');
app.get('/users', usersController.index);
app.post('/users', usersController.create);
app.delete('/users/delete/:id', usersController.delete);
app.put('/users/update/:id', usersController.update);
app.all("*", (req, res) => { res.sendFile(path.resolve("./public/dist/index.html")) });
}
