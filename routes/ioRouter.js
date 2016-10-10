var bcrypt = require('bcrypt-nodejs');

exports.ioRoute = function(socket) {
    socket.on('login', function(data){
        console.log(data);
    });

    socket.on('logout', function(){
        console.log('logging out');
    });

    socket.on('signup', function(data){
        data.password = bcrypt.hashSync(data.password);
        console.log(bcrypt.compareSync(data.passwordConfirm,data.password));
        console.log(data);
    });
};