/**
 * Created by Nick on 10/1/2016.
 */

colorBlinder.config(function($stateProvider, $urlRouterProvider) {

    var templates = {
        uHome          :{
            url:'/uHome',
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
            url:'/uHomeLogin',
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
            url:'/uHomeSignUp',
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
            url:'/uCreate',
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
            url:'/uCreateLogin',
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
            url:'/uCreateSignUp',
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
            url:'/uView',
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
            url:'/uViewLogin',
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
            url:'/uViewSignUp',
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
            url:'/vHome',
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
            url:'/vHomeLogout',
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
            url:'/vCreate',
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
            url:'/vCreateLogout',
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
            url:'/vCreateSaveAs',
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
            url:'/vCreateShare',
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
            url:'/vView',
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
            url:'/vViewSaveAs',
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
            url:'/vViewShare',
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
            url:'/vMyColors',
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
            url:'/vMyColorsLogout',
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
            url:'/vMyColorsDelete',
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

    $urlRouterProvider.otherwise('/uHome');

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

