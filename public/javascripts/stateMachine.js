/**
 * Created by Nick on 9/25/2016.
 */

function stateMachine(){
    tsd = {
        uHome : {
            home      : "uHome",
            view      : "uHome",
            create    : "uCreate",
            login     : "uHomeLogin",
            signup    : "uHomeSignUp",
            logout    : "uHome",
            save      : "uHome",
            saveAs    : "uHome",
            delete    : "uHome",
            myColors  : "uHome",
            share     : "uHome",
            cancel    : "uHome",
            success   : "uHome",
            failure   : "uHome"
        },
        uHomeLogin : {
            home      : "uHome",
            view      : "uHomeLogin",
            create    : "uCreate",
            login     : "uHome",
            signup    : "uHomeSignUp",
            logout    : "uHomeLogin",
            save      : "uHomeLogin",
            saveAs    : "uHomeLogin",
            delete    : "uHomeLogin",
            myColors  : "uHomeLogin",
            share     : "uHomeLogin",
            cancel    : "uHome",
            success   : "vHome",
            failure   : "uHomeLogin"
        },
        uHomeSignUp : {
            home      : "uHome",
            view      : "uHomeSignUp",
            create    : "uCreate",
            login     : "uHomeLogin",
            signup    : "uHome",
            logout    : "uHomeSignUp",
            save      : "uHomeSignUp",
            saveAs    : "uHomeSignUp",
            delete    : "uHomeSignUp",
            myColors  : "uHomeSignUp",
            share     : "uHomeSignUp",
            cancel    : "uHome",
            success   : "vHome",
            failure   : "uHomeSignUp"
        },
        uCreate : {
            home      : "uHome",
            view      : "uView",
            create    : "uCreate",
            login     : "uCreateLogin",
            signup    : "uCreateSignUp",
            logout    : "uCreate",
            save      : "uCreateLogin",
            saveAs    : "uCreateLogin",
            delete    : "uCreate",
            myColors  : "uCreate",
            share     : "uCreateLogin",
            cancel    : "uHome",
            success   : "uCreate",
            failure   : "uCreate"
        },
        uCreateLogin : {
            home      : "uHome",
            view      : "uView",
            create    : "uCreate",
            login     : "uCreate",
            signup    : "uCreateSignUp",
            logout    : "uCreateLogin",
            save      : "uCreateLogin",
            saveAs    : "uCreateLogin",
            delete    : "uCreateLogin",
            myColors  : "uCreateLogin",
            share     : "uCreateLogin",
            cancel    : "uCreate",
            success   : "vCreate",
            failure   : "uCreateLogin"
        },
        uCreateSignUp : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        uView : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        uViewLogin : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        uViewSignUp : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        vHome : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        vHomeLogout : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        vMyColors : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        vMyColorsLogout : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        vMyColorsDelete : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        vCreate : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        vCreateLogout : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        vCreateSaveAs : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        vCreateShare : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        vView : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        vViewLogout : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup     : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        vViewSaveAs : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        },
        vViewShare : {
            home      : "",
            view      : "",
            create    : "",
            login     : "",
            signup    : "",
            logout    : "",
            save      : "",
            saveAs    : "",
            delete    : "",
            myColors  : "",
            share     : "",
            cancel    : "",
            success   : "",
            failure   : ""
        }
    };

    this.getNext = function(currentState,command,next){
        next(tsd[currentState][command]);
    }
}
