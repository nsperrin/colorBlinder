/**
 * Created by Nick on 10/1/2016.
 */
colorBlinder.controller('master', ['$scope', '$state','$rootScope', function($scope,$state,$rootScope) {
    $scope.stateMachine = new stateMachine();
    $rootScope.socket = io('https://localhost:8443', {
        secure:true,
        reconnect:true
    });
    $scope.currentScheme;
    $scope.signup = {
        email:null,
        password:null,
        passwordConfirm:null
    };
    $scope.loginModel = {
        email:null,
        password:null
    };
    $scope.hasError = false;
    $scope.error = null;

    $scope.isSignUpDisabled = function(){
        return !($scope.signup.email !== null && $scope.signup.email !== undefined && $scope.signup.email !== ""
        && $scope.signup.password !== null && $scope.signup.password !== undefined && $scope.signup.password !== ""
        && $scope.signup.passwordConfirm !== null && $scope.signup.passwordConfirm !== undefined && $scope.signup.passwordConfirm !== ""
        && typeof $scope.signup.email === 'string'
        && typeof $scope.signup.password === 'string'
        && typeof $scope.signup.passwordConfirm === 'string'
        && $scope.signup.password == $scope.signup.passwordConfirm);
    };

    $scope.isLoginDisabled = function(){
        return !($scope.loginModel.email !== null && $scope.loginModel.email !== undefined && $scope.loginModel.email !== ""
        && $scope.loginModel.password !== null && $scope.loginModel.password !== undefined && $scope.loginModel.password !== ""
        && typeof $scope.loginModel.email === 'string'
        && typeof $scope.loginModel.password === 'string');
    };

    $scope.changeState = function(action){
        $scope.stateMachine.getNext($state.$current,action,function(newState){
            $scope.hasError = false;
            $scope.error = null;
            $rootScope.socket.emit('saveState',{state:newState});
            $state.go(newState);
        });
    };

    $scope.displayLogin = function(){$scope.changeState('login');};

    $scope.displaySignUp = function(){$scope.changeState('signup');};

    $scope.create = function(){$scope.changeState('create');};

    $scope.home = function(){$scope.changeState('home');};

    $scope.myColors = function(){$scope.changeState('myColors');};

    $scope.displayLogout = function(){$scope.changeState('logout');};

    $scope.signUp = function(){
        $rootScope.socket.emit('signup',$scope.signup);
    };

    $scope.signUpSuccess = function(data){
        $scope.changeState('success');
        setTimeout(function(){
            $scope.hasError = false;
            $scope.error = null;
            $scope.$apply();
        },0);
    };

    $scope.signUpFail = function(data){
        $scope.changeState('failure');
        setTimeout(function(){
            $scope.hasError = true;
            $scope.error = data.error;
            $scope.$apply();
        },0);
    };

    $scope.login = function(){
        $rootScope.socket.emit('login', $scope.loginModel);
    };

    $scope.loginSuccess = function(data){
        $scope.changeState('success');
        setTimeout(function(){
            $scope.hasError = false;
            $scope.error = null;
            $scope.$apply();
        },0);
    };

    $scope.loginFail = function(data){
        $scope.changeState('failure');
        setTimeout(function(){
            $scope.hasError = true;
            $scope.error = data.error;
            $scope.$apply();
        },0);
    };

    $scope.logout = function(){
        $rootScope.socket.emit('logout');
    };

    $scope.logoutSuccess = function(){
        $scope.changeState('success');
        setTimeout(function(){
            $scope.hasError = false;
            $scope.error = null;
            $scope.$apply();
        },0);
    };

    $scope.logoutFail = function(data){
        $scope.changeState('failure');
        setTimeout(function(){
            $scope.hasError = true;
            $scope.error = data.error;
            $scope.$apply();
        },0);
    };

    $rootScope.socket.on('signUpSuccess', $scope.signUpSuccess);
    $rootScope.socket.on('signUpFail', $scope.signUpFail);
    $rootScope.socket.on('loginSuccess', $scope.loginSuccess);
    $rootScope.socket.on('loginFail', $scope.loginFail);
    $rootScope.socket.on('logoutSuccess', $scope.logoutSuccess);
    $rootScope.socket.on('logoutFail', $scope.logoutFail);
    $rootScope.socket.on('transition', function(data){
        console.log('transition');
        console.log(data);
        console.log(data.state);
        $state.go(data.state);
    });
    $rootScope.socket.on('reconnect',function(data){
        console.log(data);
    });
}]);