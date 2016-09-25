/**
 * Created by Nick on 9/25/2016.
 */

function stateMachine(){
    tsd = {
        uHome : {
            home      : "uHome",
            view      : "uView",
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
        uHomeSignUp : {
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
        uCreate : {
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
        uCreateLogin : {
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
