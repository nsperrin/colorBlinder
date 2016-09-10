/**
 * Created by Nicholas Perrin on 9/9/2016.
 */
colorBlinder.controller('unverifiedHeader', ['$scope', function($scope) {
    $scope.displaySignUp = function(){
        console.log('signup');
    };

    $scope.displayLogin = function(){
        console.log('login');
    };
}]);