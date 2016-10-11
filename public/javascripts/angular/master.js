/**
 * Created by Nick on 10/1/2016.
 */
colorBlinder.controller('master', ['$scope', '$state', function($scope,$state) {
    $scope.stateMachine = new stateMachine();
    $scope.socket = io('https://localhost:8443',{secure:true});
    $scope.userData;
    $scope.currentScheme;
    $scope.signup = {
        email:null,
        password:null,
        passwordConfirm:null
    };
    $scope.hasError = false;

    $scope.isSignUpDisabled = function(){
        return !($scope.signup.email !== null && $scope.signup.email !== undefined && $scope.signup.email !== ""
            && $scope.signup.password !== null && $scope.signup.password !== undefined && $scope.signup.password !== ""
            && $scope.signup.passwordConfirm !== null && $scope.signup.passwordConfirm !== undefined && $scope.signup.passwordConfirm !== ""
            && typeof $scope.signup.email === 'string'
            && typeof $scope.signup.password === 'string'
            && typeof $scope.signup.passwordConfirm === 'string'
            && $scope.signup.password == $scope.signup.passwordConfirm);
    };

    $scope.changeState = function(action){
        $scope.stateMachine.getNext($state.$current,action,function(newState){
            $state.go(newState);
        });
    };

    $scope.displayLogin = function(){$scope.changeState('login');};

    $scope.displaySignUp = function(){$scope.changeState('signup');};

    $scope.create = function(){$scope.changeState('create');};

    $scope.home = function(){$scope.changeState('home');};

    $scope.myColors = function(){$scope.changeState('myColors');};

    $scope.logout = function(){$scope.changeState('logout');};

    $scope.signUp = function(){
        $scope.socket.emit('signup',$scope.signup);
    };

    $scope.signUpSuccess = function(){
        $scope.changeState('success');
        setTimeout(function(){
            $scope.hasError = false;
            $scope.$apply();
        },0);
    };

    $scope.signUpFail = function(){
        $scope.changeState('failure');
        setTimeout(function(){
            $scope.hasError = true;
            $scope.$apply();
        },0);

    };

    $scope.socket.on('signUpSuccess', $scope.signUpSuccess);
    $scope.socket.on('signUpFail', $scope.signUpFail);
}]);