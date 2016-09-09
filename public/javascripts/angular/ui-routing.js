/**
 * Created by Nicholas Perrin on 9/9/2016.
 */

var uiRouting = function($stateProvider, $urlRouterProvider) {
    var create_u = {
        url:'/create',
        views: {
            navheader:{
                templateUrl: 'javascripts/angular/unverifiedHeader/unverifiedHeader.html',
                controller: "unverifiedHeader"
            },
            mains:{
                templateUrl: 'javascripts/angular/create/create.html'
            }
        }
    };

    var create_v = {
        views: {
            navheader:{
                templateUrl: 'javascripts/angular/verifiedHeader/verifiedHeader.html',
                controller: 'verifiedHeader'
            },
            mains:{
                templateUrl: 'javascripts/angular/create/create.html'
            }
        }
    };

    var view_u = {
        url:'/view',
        views: {
            navheader:{
                templateUrl: 'javascripts/angular/unverifiedHeader/unverifiedHeader.html',
                controller: 'unverifiedHeader'
            },
            mains:{
                templateUrl: 'javascripts/angular/view/view.html'
            }
        }
    };

    var view_v = {
        views: {
            navheader:{
                templateUrl: 'javascripts/angular/verifiedHeader/verifiedHeader.html',
                controller: 'verifiedHeader'
            },
            mains:{
                templateUrl: 'javascripts/angular/view/view.html'
            }
        }
    };

    $urlRouterProvider.otherwise("/create");
    $stateProvider
        .state('create-u', create_u)
        .state('create-v', create_v)
        .state('view-u', view_u)
        .state('view-v', view_v);
}