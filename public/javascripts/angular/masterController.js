/**
 * Created by Nicholas Perrin on 9/11/2016.
 */

colorBlinder.controller('master', ['$scope', function($scope) {
    $scope.STATES = {
        CLEAR:0,
        LOGIN:1,
        SIGNUP:2
    };

    $scope.currentState = $scope.STATES.CLEAR;

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

    $scope.socket  = io.connect();

}]);