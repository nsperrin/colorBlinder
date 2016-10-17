var bcrypt = require('bcrypt-nodejs');
var db = require('../util/db');

exports.ioRoute = function(socket) {
    console.log('a new connection has been made');

    socket.on('login', function(data){
        db.authenticate(data, function failure(message){
            socket.emit('loginFail',{error:message});
        },function success(user){
            if(user.length !== 1){
                socket.emit('loginFail', {error:"Email/Password is not correct try again!"});
            }else{
                bcrypt.compare(data.password,user[0].password+"",function(err,res){
                    if(err) socket.emit('loginFail', {error:"There was an error on our end. We're working on it."});
                    else if(!res)socket.emit('loginFail', {error:"Email/Password is not correct try again!"});
                    else{
                        socket.handshake.session.userdata = user[0];
                        socket.emit('loginSuccess', user[0]);
                    }
                });
            }
        });
    });

    socket.on("logout", function(userdata) {
        if (socket.handshake.session.userdata) {
            delete socket.handshake.session.userdata;
            socket.emit('logoutSuccess');
        }else{
            socket.emit('logoutFail',{error:"There was an error on our end. We're working on it."});
        }
    });


    socket.on('signup', function(data){
        db.getExistingUsersWithThisEmail(data,function failure(message) {
            socket.emit('signUpFail', {error:message});
        },function success(users) {
            if(users.length>0){
                socket.emit('signUpFail', {error:"That email is already in use!"});
            }else{
                bcrypt.hash(data.password,null,null,function(err,hash){
                    if(err) socket.emit('signUpFail', {error:"There was an error on our end. We're working on it."});
                    data.password = hash;
                    db.createUser(data,function failure(message) {
                        socket.emit('signUpFail', {error:message});
                    },function success(){
                        delete data.passwordConfirm;
                        socket.handshake.session.userdata = data;
                        socket.emit('signUpSuccess',data);
                    });
                });
            }
        });
    });

    socket.on('getState', function(){
        console.log('getting state '+socket.handshake.session.state);
        if(socket.handshake.session.state){
            console.log('getting state fo real');
            socket.emit('transition', {state:socket.handshake.session.state});
        }
    });

    socket.on('saveState', function(data){
        console.log('save state '+data.state);
        socket.handshake.session.state = data.state;
    });

    socket.on('disconnect', function () {
        socket.emit('reconnect',{state: socket.handshake.session.state});
    });
};