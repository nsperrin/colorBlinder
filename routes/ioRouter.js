exports.ioRoute = function(socket) {
    socket.on('loginAuth', function(data){
        console.log(data);
    });
};