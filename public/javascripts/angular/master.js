
colorBlinder.controller('master', ['$scope', '$http', '$state','stateMachine', 'colorConvert', function($scope,$http,$state,StateMachine,ColorConvert){
    $scope.userData = {email:'',password:'',schemes:[]};
    $scope.Math = window.Math;
    $scope.ColorConvert = new ColorConvert();
    $scope.loginFormModels = {
        email:'',
        password:''
    };
    $scope.signUpFormModels = {
        email:'',
        password:'',
        passwordConfirm:''
    };
    $scope.error = null;
    $scope.currentScheme = {
        name:'',
        colors:[]
    };
    $scope.currentState = '';
    $scope.colorModel='Normal';
    $scope.blindness = [
        "Normal",
        "Protanopia",
        "Protanomaly",
        "Deuteranopia",
        "Deuteranomaly",
        "Tritanopia",
        "Tritanomaly",
        "Achromatopsia",
        "Achromatomaly"
    ];
    $scope.isSignUpDisabled = function(){
        return false;
    };

    $scope.isLoginDisabled = function(){
        return false;
    };

    $scope.displayLogin = function(){
        console.log('login');
        $scope.changeState('login');
    };

    $scope.displaySignUp = function(){
        console.log('signUp');
        $scope.changeState('signUp');
    };

    $scope.create = function(){$scope.changeState('create');};

    $scope.home = function(){$scope.changeState('home');};

    $scope.myColors = function(){$scope.changeState('myColors');};

    $scope.displayLogout = function(){$scope.changeState('logout');};

    //login,signUp,logout,getState,getSchemes,getUserData,saveState,saveScheme
    //are all communication based functions that allow the controller to talk
    //to the server, be that it is to save or get data
    $scope.login = function(){
        $http.post('/login', $scope.loginFormModels)
            .success(function(){
                $scope.getUserData();
                $scope.changeState('success');
            })
            .error(function(data){
                console.log('Login Error');
                $scope.error = data.error;
                //$scope.$apply();
            });
    };

    $scope.signUp = function(){
        $http({
            method: 'POST',
            url: '/signUp',
            data: $scope.signUpFormModels
        }).then(function successCallback(response) {
            $scope.getUserData();
            $scope.changeState('success');
        }, function errorCallback(response) {
            $scope.error = data.error;
        });

    };

    $scope.logout = function(){
        $http.get('/logout')
            .success(function(){
                $scope.userData = null;
                $scope.curreScheme = null;
                $scope.schemes = null;
                $scope.changeState('success');
            })
            .error(function(data){
                $scope.error = data.error
            });
    };

    $scope.getState = function(){
        $http.get('/getState')
            .success(function(data){
                $scope.currentState = data.state;
                $scope.stateMachine = new StateMachine(data.state);
                $state.go(data.state);
            })
            .error(function(){
                $scope.currentState = 'uHome';
                $scope.stateMachine = new StateMachine('uHome');
                $state.go('uHome');
            });
    };

    $scope.getUserData = function(){
        $http.get('/getUserData')
            .success(function(data){
                $scope.userData = data;
            })
            .error(function(){
                $scope.userData = null;
            });
    };

    $scope.saveState = function(){
        $http.post('/saveState', {state:$scope.currentState})
            .success(function(){
            })
            .error(function(data){
                $scope.error = data.error;
            });
    };

    $scope.saveScheme = function(){
        $http.post('/saveScheme', $scope.currentScheme)
            .success(function(){
            })
            .error(function(data){
                $scope.error = data.error;
            });
    };

    //The following functions allow the app to flow
    $scope.changeState = function(action){
        $scope.stateMachine.next(action,function(newState){
            $scope.currentState = newState;
            $scope.error = null;
            $scope.inView = newState.includes('View');
            $state.go(newState);
            setTimeout(function(){
                $scope.updateColor();
            },0);
            $scope.saveState();
        });
    };

    $scope.addToScheme = function(){
        $scope.currentScheme.colors.push({R:0,G:0,B:0});
        setTimeout(function(){
            $scope.updateColor();
        },0);
    };

    $scope.updateColor = function(){
        $('.color').each(function(index){
            var newColor = $scope.ColorConvert.convert($scope.currentScheme.colors[index],$scope.colorModel);
            $(this).css("background-color","rgba("
                +newColor.R
                +","+newColor.G
                +","+newColor.B+","
                +1+")");
            var c = 255;
            if(((newColor.R+newColor.G+newColor.B)/3)>127) c = 0;
            $(this).css("color","rgba(" +c +","+c +","+c+"," +1+")");
        });
    };

    $scope.deleteColor = function(n){
        $scope.currentScheme.colors.splice(n, 1);
    };

    $scope.eyeCancel = function(){
        $scope.changeState('cancel');
    };

    $scope.updateBlindness = function(blindness){
        $scope.colorModel = blindness;
        setTimeout(function(){
            $scope.updateColor();
        },0);
    };

    $scope.initData = function(){
        $scope.getUserData();
        $scope.getState();
    };

    $scope.selectScheme = function(scheme){
        $scope.currentScheme =  jQuery.extend(true, {}, scheme);
        $scope.changeState('create');
    };

    $scope.save = function(){
        if($scope.userData.email!='')
            $http.post('/saveScheme',$scope.currentScheme).then(
                function(){
                    $scope.getUserData();
                },
                function(data){
                    $scope.getUserData();
                    $scope.error = data.error;
                }
            );
        else
            $scope.changeState('login');
    };

    $scope.displayDelete = function(scheme){
        $scope.changeState('delete');
        $scope.schemeToDelete = scheme;
    };

    $scope.deleteScheme = function(){
        $http.post('/deleteScheme', $scope.schemeToDelete)
            .success(function(){
                $scope.getUserData();
                $scope.changeState('success');
            })
            .error(function(data){
                $scope.error = data.error;
            });
    };



    $(document).ready($scope.initData);

}]);
