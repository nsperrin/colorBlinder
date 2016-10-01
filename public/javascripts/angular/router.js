/**
 * Created by Nick on 10/1/2016.
 */

colorBlinder.config(function($stateProvider, $urlRouterProvider) {
    var uHome = {
        url:'/home',
        views:{
            header: {
                templateUrl: 'partials/header/unverified.html'
            },
            subHeader:{
                template:""
            },
            popUp:{
                template:""
            },
            main:{
                templateUrl:"partials/main/home.html"
            }
        }
    };

    var uHomeLogin = {
        url: '/home',
        views: {
            header: {
                templateUrl: 'partials/header/unverified.html'
            },
            subHeader: {
                template: ""
            },
            popUp: {
                templateUrl: "partials/popUp/login.html"
            },
            main: {
                templateUrl: "partials/main/home.html"
            }
        }
    };

    var uHomeSignUp = {
        url:'/home',
        views:{
            header: {
                templateUrl: 'partials/header/unverified.html'
            },
            subHeader:{
                template:""
            },
            popUp:{
                templateUrl:"partials/popUp/signup.html"
            },
            main:{
                templateUrl:"partials/main/home.html"
            }
        }
    };

    var uCreate = {
        url:'/create',
        views:{
            header: {
                templateUrl: 'partials/header/unverified.html'
            },
            subHeader:{
                template:""
            },
            popUp:{
                template:""
            },
            main:{
                templateUrl:"partials/main/create.html"
            }
        }
    };

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('uHome',uHome)
        .state('uHomeLogin',uHomeLogin)
        .state('uHomeSignUp',uHomeSignUp)
        .state('uCreate',uCreate)
});