var usersController = require('../controllers/users.js');
const path = require('path')


module.exports = function(app) {
    console.log("in routes");

    app.post('/user', function(req,res){
        usersController.getUser(req,res);
    })

    app.post('/users', function(req,res){
        usersController.create(req,res);
    })

    app.delete('/users/delete/:id', function(req,res){
        usersController.delete(req,res);
    })

    app.put('/users/update/:id', function(req,res){
        usersController.update(req,res);
    })

}

