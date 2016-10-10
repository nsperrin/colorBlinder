var bcrypt = require('bcrypt-nodejs');
var db = require('../util/db');

exports.ioRoute = function(socket) {
    socket.on('login', function(data){
        console.log(data);
    });

    socket.on("logout", function(userdata) {
        if (socket.handshake.session.userdata) {
            delete socket.handshake.session.userdata;
        }
    });


    socket.on('signup', function(data){
        db.checkForExistingEmail(data,function failure(){
            socket.emit('signUpFail');
        },function success(userdata){
            data.password = bcrypt.hashSync(data.password);
            db.createUser(data);
            socket.handshake.session.userdata = userdata;
            socket.emit('signUpSuccess', userdata);
        });
    });
};