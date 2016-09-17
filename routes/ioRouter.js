exports.ioRoute = function(socket) {
    socket.on('login', function(data){
        console.log(data);
    });

    socket.on('logout', function(){
        console.log('logging out');
    });

    socket.on('signUp', function(data){
        console.log(data);
    });
};