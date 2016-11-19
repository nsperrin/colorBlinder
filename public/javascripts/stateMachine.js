
colorBlinder.factory('stateMachine', function() {
    var stateMachine = function(startState){
        this.defaultState = 'uHome';
        this.states  = [
            "uHome"  ,"uHomeLogin"  ,"uHomeSignUp",
            "uCreate","uCreateLogin","uCreateSignUp",
            "uView","uViewLogin","uViewSignUp",
            "vHome","vHomeLogout",
            "vCreate","vCreateLogout","vCreateSaveAs","vCreateShare",
            "vView","vViewSaveAs","vViewShare",
            "vMyColors","vMyColorsLogout","vMyColorsDelete"
        ];
        this.commands = [
            "home"  ,"create","view"   ,"myColors",
            "login" ,"signUp","logout" ,"saveAs",
            "delete","share" ,"success","cancel"
        ];
        this.transitions = {
            uHome:{
                create:"uCreate",
                login :"uHomeLogin",
                signUp:"uHomeSignUp"
            },
            uHomeLogin:{
                home   :"uHome",
                create :"uCreate",
                login  :"uHome",
                signUp :"uHomeSignUp",
                success:"vHome"
            },
            uHomeSignUp:{
                home   :"uHome",
                create :"uCreate",
                login  :"uHomeLogin",
                signUp :"uHome",
                success:"vHome"
            },
            vHome:{
                myColors:"vMyColors",
                create  :"vCreate",
                logout  :"vHomeLogout"
            },
            vHomeLogout:{
                home    :"vHome",
                myColors:"vMyColors",
                create  :"vCreate",
                logout  :"vHomeLogout",
                success :"uHome"
            },
            uCreate:{
                home    :"uHome",
                view    :"uView",
                login   :"uCreateLogin",
                signUp  :"uCreateSignUp",
                cancel  :"uView",
                saveAs  :"uCreateLogin",
                share   :"uCreateLogin"
            },
            uCreateLogin:{
                home    :"uHome",
                create  :"uCreate",
                view    :"uView",
                login   :"uCreate",
                signUp  :"uCreateSignUp",
                cancel  :"uView",
                saveAs  :"uCreateLogin",
                share   :"vCreateLogin",
                success :"vCreate"
            },
            uCreateSignUp:{
                home    :"uHome",
                create  :"uCreate",
                view    :"uView",
                login   :"uCreateLogin",
                signUp  :"uCreate",
                cancel  :"uView",
                saveAs  :"uCreateLogin",
                share   :"vCreateLogin",
                success :"vCreate"
            },
            vCreate:{
                home    :"vHome",
                myColors:"vMyColors",
                view    :"vView",
                logout  :"vCreateLogout",
                cancel  :"vView",
                saveAs  :"vCreateSaveAs",
                share   :"vCreateShare",
                success :"vCreate"
            },
            vCreateLogout:{
                home    :"vHome",
                create  :"vCreate",
                myColors:"vMyColors",
                view    :"vView",
                logout  :"vCreate",
                cancel  :"vView",
                saveAs  :"vCreateSaveAs",
                share   :"vCreateShare",
                success :"vCreate"
            },
            vCreateSaveAs:{
                home    :"vHome",
                create  :"vCreate",
                myColors:"vMyColors",
                view    :"vView",
                logout  :"vCreateLogout",
                cancel  :"vView",
                saveAs  :"vCreate",
                share   :"vCreateShare",
                success :"vCreate"
            },
            vCreateShare:{
                home    :"vHome",
                create  :"vCreate",
                myColors:"vMyColors",
                view    :"vView",
                logout  :"vCreateLogout",
                cancel  :"vView",
                saveAs  :"vCreateSaveAs",
                share   :"vCreate",
                success :"vCreate"
            },
            uView:{
                cancel:"uCreate",
                saveAs:"uViewLogin",
                share :"uViewLogin"
            },
            uViewLogin:{
                cancel :"uCreate",
                signUp :"uViewSignUp",
                success:"uView"
            },
            uViewSignUp:{
                cancel :"uCreate",
                login  :"uViewLogin",
                success:"uView"
            },
            vView:{
                cancel:"vCreate",
                saveAs:"vViewSaveAs",
                share :"vViewShare"
            },
            vViewSaveAs:{
                cancel :"vCreate",
                saveAs :"vView",
                share  :"vViewShare",
                success:"vView"
            },
            vViewShare:{
                cancel :"vCreate",
                saveAs :"vViewSaveAs",
                share  :"vView",
                success:"vView"
            },
            vMyColors:{
                home    :"vHome",
                create  :"vCreate",
                myColors:"vMyColors",
                logout  :"vMyColorsLogout",
                delete  :"vMyColorsDelete"
            },
            vMyColorsLogout:{
                home    :"vHome",
                create  :"vCreate",
                myColors:"vMyColors",
                logout  :"vMyColors",
                delete  :"vMyColorsDelete",
                success :"uHome"
            },
            vMyColorsDelete:{
                home    :"vHome",
                create  :"vCreate",
                myColors:"vMyColors",
                logout  :"vMyLogout",
                delete  :"vMyColors",
                success :"vMyColors"
            }

        };
        this.current = (this.states.indexOf(startState) !== -1) ? startState : this.defaultState;
    };

    stateMachine.prototype.next = function(command, callback){
        var returnState = this.get();
        if( (this.commands.indexOf(command) !== -1)&&
            (this.transitions.hasOwnProperty(returnState))&&
            (this.transitions[returnState].hasOwnProperty(command))
        ){
            returnState = this.transitions[this.current][command];
        }
        this.current = returnState;

        callback(returnState);
    };

    stateMachine.prototype.get = function(){
        return this.current;
    };

    return stateMachine;
});

