/**
 * Created by Nicholas Perrin on 9/9/2016.
 */
var uiRouting = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/create");
    $stateProvider
        .state('create-u', {
            url:'/create',
            views: {
                navheader:{
                    templateUrl: 'javascripts/angular/unverifiedHeader/unverifiedHeader.html'
                },
                mains:{
                    templateUrl: 'javascripts/angular/create/create.html'
                }
            }
        })
        .state('create-v',{
            views: {
                navheader:{
                    templateUrl: 'javascripts/angular/verifiedHeader/verifiedHeader.html'
                },
                mains:{
                    templateUrl: 'javascripts/angular/create/create.html'
                }
            }
        })
        .state('view-u', {
            url:'/view',
            views: {
                navheader:{
                    templateUrl: 'javascripts/angular/unverifiedHeader/unverifiedHeader.html'
                },
                mains:{
                    templateUrl: 'javascripts/angular/view/view.html'
                }
            }
        })
        .state('view-v', {
            views: {
                navheader:{
                    templateUrl: 'javascripts/angular/verifiedHeader/verifiedHeader.html'
                },
                mains:{
                    templateUrl: 'javascripts/angular/view/view.html'
                }
            }
        });
}