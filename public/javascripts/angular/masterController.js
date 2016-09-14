
colorBlinder.controller('master', ['$scope', function($scope) {

    $scope.socket  = io.connect();
    $scope.STATES = {
        CLEAR:0,
        LOGIN:1,
        SIGNUP:2
    };
    $scope.currentState = $scope.STATES.CLEAR;
    $scope.loginCreds = {
        email:'',
        pass:'',
        rememberMe:false
    };

    $scope.displaySignUp = function(){
        if($scope.currentState !== $scope.STATES.SIGNUP){
            $scope.currentState = $scope.STATES.SIGNUP;
        }else{
            $scope.currentState = $scope.STATES.CLEAR;
        }
    };

    $scope.displayLogin = function(){
        if($scope.currentState !== $scope.STATES.LOGIN){
            $scope.currentState = $scope.STATES.LOGIN;
        }else{
            $scope.currentState = $scope.STATES.CLEAR;
        }
    };

    $scope.logout = function(){
        console.log('logout');
    };


    $scope.login = function(){
        $scope.socket.emit('loginAuth', $scope.loginCreds);
    }


}]);