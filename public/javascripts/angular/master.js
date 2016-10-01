/**
 * Created by Nick on 10/1/2016.
 */
colorBlinder.controller('master', ['$scope', '$state', function($scope,$state) {
    $scope.stateMachine = new stateMachine();
    $scope.userData;
    $scope.currentScheme;

    $scope.changeState = function(action){
        $scope.stateMachine.getNext($state.$current,action,function(newState){
            $state.go(newState);
        });
    };

    $scope.displayLogin  = function(){$scope.changeState('login');};
    $scope.displaySignUp = function(){$scope.changeState('signup');};
    $scope.create        = function(){$scope.changeState('create');};
    $scope.home          = function(){$scope.changeState('home');};
    $scope.myColors      = function(){$scope.changeState('myColors');};
    $scope.logout        = function(){$scope.changeState('logout');};
}]);