var sendResponse = function(data,emit){
    console.log(data);
    console.log(emit);
    emit('loginError',data);
};

var isValidCredentials = function(socket, data){
    var err;
    if(false){
        data.colors = [];
    }else{
        err = "Your email and password did not match any in our records!";
    }
    this.sendResponse(socket.emit,data);
};

var hasRequiredData = function(socket,data){
    if(data.email && data.password){
        this.isValidCredentials(socket,data);
    }else{
        this.sendResponse(socket.emit,{err:"Insufficient data was recieved please try again!"});
    }
};


module.exports = {
    sendResponse:sendResponse,
    isValidCredentials:isValidCredentials,
    hasRequiredData: hasRequiredData

};