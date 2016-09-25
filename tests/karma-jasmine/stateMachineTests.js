var sm = new stateMachine();
describe('Tests for state machine', function(){
    describe('uHome', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHome', 'home', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHome', 'view', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->uCreate', function(done){
            sm.getNext('uHome', 'create', function(newState) {
                expect(newState).toEqual('uCreate');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->uHomeLogin', function(done){
            sm.getNext('uHome', 'login', function(newState) {
                expect(newState).toEqual('uHomeLogin');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->uHomeSignUp', function(done){
            sm.getNext('uHome', 'signup', function(newState) {
                expect(newState).toEqual('uHomeSignUp');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHome', 'logout', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHome', 'save', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHome', 'saveAs', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHome', 'delete', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHome', 'myColors', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHome', 'share', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHome', 'cancel', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHome', 'success', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHome', 'failure', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
    });
    describe('uHomeLogin', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHomeLogin', 'home', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->uHomeLogin', function(done){
            sm.getNext('uHomeLogin', 'view', function(newState) {
                expect(newState).toEqual('uHomeLogin');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->uCreate', function(done){
            sm.getNext('uHomeLogin', 'create', function(newState) {
                expect(newState).toEqual('uCreate');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHomeLogin', 'login', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->uHomeSignUp', function(done){
            sm.getNext('uHomeLogin', 'signup', function(newState) {
                expect(newState).toEqual('uHomeSignUp');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->uHomeLogin', function(done){
            sm.getNext('uHomeLogin', 'logout', function(newState) {
                expect(newState).toEqual('uHomeLogin');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->uHomeLogin', function(done){
            sm.getNext('uHomeLogin', 'save', function(newState) {
                expect(newState).toEqual('uHomeLogin');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->uHomeLogin', function(done){
            sm.getNext('uHomeLogin', 'saveAs', function(newState) {
                expect(newState).toEqual('uHomeLogin');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->uHomeLogin', function(done){
            sm.getNext('uHomeLogin', 'delete', function(newState) {
                expect(newState).toEqual('uHomeLogin');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->uHomeLogin', function(done){
            sm.getNext('uHomeLogin', 'myColors', function(newState) {
                expect(newState).toEqual('uHomeLogin');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->uHomeLogin', function(done){
            sm.getNext('uHomeLogin', 'share', function(newState) {
                expect(newState).toEqual('uHomeLogin');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHomeLogin', 'cancel', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->vHome', function(done){
            sm.getNext('uHomeLogin', 'success', function(newState) {
                expect(newState).toEqual('vHome');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->uHomeLogin', function(done){
            sm.getNext('uHomeLogin', 'failure', function(newState) {
                expect(newState).toEqual('uHomeLogin');
                done();
            });
        });
    });
    describe('uHomeSignUp', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHomeSignUp', 'home', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->uHomeSignUp', function(done){
            sm.getNext('uHomeSignUp', 'view', function(newState) {
                expect(newState).toEqual('uHomeSignUp');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->uCreate', function(done){
            sm.getNext('uHomeSignUp', 'create', function(newState) {
                expect(newState).toEqual('uCreate');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->uHomeLogin', function(done){
            sm.getNext('uHomeSignUp', 'login', function(newState) {
                expect(newState).toEqual('uHomeLogin');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHomeSignUp', 'signup', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->uHomeSignUp', function(done){
            sm.getNext('uHomeSignUp', 'logout', function(newState) {
                expect(newState).toEqual('uHomeSignUp');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->uHomeSignUp', function(done){
            sm.getNext('uHomeSignUp', 'save', function(newState) {
                expect(newState).toEqual('uHomeSignUp');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->uHomeSignUp', function(done){
            sm.getNext('uHomeSignUp', 'saveAs', function(newState) {
                expect(newState).toEqual('uHomeSignUp');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->uHomeSignUp', function(done){
            sm.getNext('uHomeSignUp', 'delete', function(newState) {
                expect(newState).toEqual('uHomeSignUp');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->uHomeSignUp', function(done){
            sm.getNext('uHomeSignUp', 'myColors', function(newState) {
                expect(newState).toEqual('uHomeSignUp');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->uHomeSignUp', function(done){
            sm.getNext('uHomeSignUp', 'share', function(newState) {
                expect(newState).toEqual('uHomeSignUp');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->uHome', function(done){
            sm.getNext('uHomeSignUp', 'cancel', function(newState) {
                expect(newState).toEqual('uHome');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->vHome', function(done){
            sm.getNext('uHomeSignUp', 'success', function(newState) {
                expect(newState).toEqual('vHome');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->uHomeSignUp', function(done){
            sm.getNext('uHomeSignUp', 'failure', function(newState) {
                expect(newState).toEqual('uHomeSignUp');
                done();
            });
        });
    });
    describe('uCreate', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreate', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('uCreateLogin', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateLogin', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('uCreateSignUp', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uCreateSignUp', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('uView', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uView', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('uViewLogin', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewLogin', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('uViewSignUp', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('uViewSignUp', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('vHome', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHome', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('vHomeLogout', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vHomeLogout', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('vMyColors', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColors', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('vMyColorsLogout', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsLogout', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('vMyColorsDelete', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vMyColorsDelete', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('vCreate', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreate', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('vCreateLogout', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateLogout', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('vCreateSaveAs', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateSaveAs', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('vCreateShare', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vCreateShare', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('vView', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vView', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('vViewLogout', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewLogout', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('vViewSaveAs', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewSaveAs', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
    describe('vViewShare', function(){
        it('---'+('home'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'home', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('view'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'view', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('create'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'create', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('login'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'login', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('signup'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'signup', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('logout'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'logout', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('save'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'save', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('saveAs'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'saveAs', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('delete'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'delete', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('myColors'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'myColors', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('share'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'share', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('cancel'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'cancel', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('success'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'success', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
        it('---'+('failure'+'-----').substring(0,9)+'--->', function(done){
            sm.getNext('vViewShare', 'failure', function(newState) {
                expect(newState).toEqual('');
                done();
            });
        });
    });
});
