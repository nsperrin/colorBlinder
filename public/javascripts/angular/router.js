/**
 * Created by Nick on 10/1/2016.
 */

colorBlinder.config(function($stateProvider, $urlRouterProvider) {
    var templates = {
        uHome          :{
            url:'/home',
            views:{
                header: {
                    templateUrl: 'partials/header/unverified.html'
                },
                subHeader:{
                    template: ''
                },
                popUp:{
                    template: ''
                },
                main:{
                    templateUrl: 'partials/main/home.html'
                }
            }
        },
        uHomeLogin     :{
            url:'/home',
            views:{
                header: {
                    templateUrl: 'partials/header/unverified.html'
                },
                subHeader:{
                    template: ''
                },
                popUp:{
                    templateUrl: 'partials/popUp/login.html'
                },
                main:{
                    templateUrl: 'partials/main/home.html'
                }
            }
        },
        uHomeSignUp    :{
            url:'/home',
            views:{
                header: {
                    templateUrl: 'partials/header/unverified.html'
                },
                subHeader:{
                    template: ''
                },
                popUp:{
                    templateUrl: 'partials/popUp/signUp.html'
                },
                main:{
                    templateUrl: 'partials/main/home.html'
                }
            }
        },
        uCreate        :{
            url:'/create',
            views:{
                header: {
                    templateUrl: 'partials/header/unverified.html'
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/edit.html'
                },
                popUp:{
                    template: ''
                },
                main:{
                    templateUrl: 'partials/main/create.html'
                }
            }
        },
        uCreateLogin   :{
            url:'/create',
            views:{
                header: {
                    templateUrl: 'partials/header/unverified.html'
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/edit.html'
                },
                popUp:{
                    templateUrl: 'partials/popUp/login.html'
                },
                main:{
                    templateUrl: 'partials/main/create.html'
                }
            }
        },
        uCreateSignUp  :{
            url:'/create',
            views:{
                header: {
                    templateUrl: 'partials/header/unverified.html'
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/edit.html'
                },
                popUp:{
                    templateUrl: 'partials/popUp/signUp.html'
                },
                main:{
                    templateUrl: 'partials/main/create.html'
                }
            }
        },
        uView          :{
            url:'/view',
            views:{
                header: {
                    template: ''
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/edit.html'
                },
                popUp:{
                    template: ''
                },
                main:{
                    templateUrl: 'partials/main/view.html'
                }
            }
        },
        uViewLogin     :{
            url:'/view',
            views:{
                header: {
                    template: ''
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/edit.html'
                },
                popUp:{
                    templateUrl: 'partials/popUp/login.html'
                },
                main:{
                    templateUrl: 'partials/main/view.html'
                }
            }
        },
        uViewSignUp    :{
            url:'/view',
            views:{
                header: {
                    template: ''
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/edit.html'
                },
                popUp:{
                    templateUrl: 'partials/popUp/signUp.html'
                },
                main:{
                    templateUrl: 'partials/main/view.html'
                }
            }
        },
        vHome          :{
            url:'/home',
            views:{
                header: {
                    templateUrl: 'partials/header/verified.html'
                },
                subHeader:{
                    template: ''
                },
                popUp:{
                    template: ''
                },
                main:{
                    templateUrl: 'partials/main/home.html'
                }
            }
        },
        vHomeLogout    :{
            url:'/home',
            views:{
                header: {
                    templateUrl: 'partials/header/verified.html'
                },
                subHeader:{
                    template: ''
                },
                popUp:{
                    templateUrl: 'partials/popUp/logout.html'
                },
                main:{
                    templateUrl: 'partials/main/home.html'
                }
            }
        },
        vCreate        :{
            url:'/create',
            views:{
                header: {
                    templateUrl: 'partials/header/verified.html'
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/edit.html'
                },
                popUp:{
                    template: ''
                },
                main:{
                    templateUrl: 'partials/main/create.html'
                }
            }
        },
        vCreateLogout  :{
            url:'/create',
            views:{
                header: {
                    templateUrl: 'partials/header/verified.html'
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/edit.html'
                },
                popUp:{
                    templateUrl: 'partials/popUp/logout.html'
                },
                main:{
                    templateUrl: 'partials/main/create.html'
                }
            }
        },
        vCreateSaveAs  :{
            url:'/create',
            views:{
                header: {
                    templateUrl: 'partials/header/verified.html'
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/edit.html'
                },
                popUp:{
                    templateUrl: 'partials/popUp/saveAs.html'
                },
                main:{
                    templateUrl: 'partials/main/create.html'
                }
            }
        },
        vCreateShare   :{
            url:'/create',
            views:{
                header: {
                    templateUrl: 'partials/header/verified.html'
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/edit.html'
                },
                popUp:{
                    templateUrl: 'partials/popUp/share.html'
                },
                main:{
                    templateUrl: 'partials/main/create.html'
                }
            }
        },
        vView          :{
            url:'/view',
            views:{
                header: {
                    template: ''
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/edit.html'
                },
                popUp:{
                    template: ''
                },
                main:{
                    templateUrl: 'partials/main/view.html'
                }
            }
        },
        vViewSaveAs    :{
            url:'/view',
            views:{
                header: {
                    template: ''
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/edit.html'
                },
                popUp:{
                    templateUrl: 'partials/popUp/saveAs.html'
                },
                main:{
                    templateUrl: 'partials/main/view.html'
                }
            }
        },
        vViewShare     :{
            url:'/view',
            views:{
                header: {
                    template: ''
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/edit.html'
                },
                popUp:{
                    templateUrl: 'partials/popUp/share.html'
                },
                main:{
                    templateUrl: 'partials/main/view.html'
                }
            }
        },
        vMyColors      :{
            url:'/myColors',
            views:{
                header: {
                    templateUrl: 'partials/header/verified.html'
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/l.html'
                },
                popUp:{
                    template: ''
                },
                main:{
                    templateUrl: 'partials/main/myColors.html'
                }
            }
        },
        vMyColorsLogout:{
            url:'/myColors',
            views:{
                header: {
                    templateUrl: 'partials/header/verified.html'
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/l.html'
                },
                popUp:{
                    templateUrl: 'partials/popUp/logout.html'
                },
                main:{
                    templateUrl: 'partials/main/myColors.html'
                }
            }
        },
        vMyColorsDelete:{
            url:'/myColors',
            views:{
                header: {
                    templateUrl: 'partials/header/verified.html'
                },
                subHeader:{
                    templateUrl: 'partials/subHeader/l.html'
                },
                popUp:{
                    templateUrl: 'partials/popUp/delete.html'
                },
                main:{
                    templateUrl: 'partials/main/myColors.html'
                }
            }
        }
    };

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state("uHome"          , templates.uHome)
        .state("uHomeLogin"     , templates.uHomeLogin)
        .state("uHomeSignUp"    , templates.uHomeSignUp)
        .state("uCreate"        , templates.uCreate)
        .state("uCreateLogin"   , templates.uCreateLogin)
        .state("uCreateSignUp"  , templates.uCreateSignUp)
        .state("uView"          , templates.uView)
        .state("uViewLogin"     , templates.uViewLogin)
        .state("uViewSignUp"    , templates.uViewSignUp)
        .state("vHome"          , templates.vHome)
        .state("vHomeLogout"    , templates.vHomeLogout)
        .state("vCreate"        , templates.vCreate)
        .state("vCreateLogout"  , templates.vCreateLogout)
        .state("vCreateSaveAs"  , templates.vCreateSaveAs)
        .state("vCreateShare"   , templates.vCreateShare)
        .state("vView"          , templates.vView)
        .state("vViewSaveAs"    , templates.vViewSaveAs)
        .state("vViewShare"     , templates.vViewShare)
        .state("vMyColors"      , templates.vMyColors)
        .state("vMyColorsLogout", templates.vMyColorsLogout)
        .state("vMyColorsDelete", templates.vMyColorsDelete)
});

