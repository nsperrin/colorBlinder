/**
 * Created by Nick on 10/1/2016.
 */
describe('Tests for Header Unverified',function(){
    beforeEach(function(done){
        //WHEN SIGNOUT SIGN IN SYSTEM WORKS HAVE THIS SIGN OUT IF THEY ARE SIGNED IN
        done();
    });

    it('Unverified header should exists',function(done){
        browser.get("https://localhost:8443/");
        expect(element(by.css('#unverifiedHeader')).isPresent()).toBeTruthy();
        done();
    });

    it('Home button should exists',function(done){
        browser.get("https://localhost:8443/");
        expect(element(by.css('#unverifiedHeader .home')).isPresent()).toBeTruthy();
        done();
    });

    it('Create button should exists',function(done){
        browser.get("https://localhost:8443/");
        expect(element(by.css('#unverifiedHeader .create')).isPresent()).toBeTruthy();
        done();
    });

    it('Login button should exists',function(done){
        browser.get("https://localhost:8443/");
        expect(element(by.css('#unverifiedHeader .login')).isPresent()).toBeTruthy();
        done();
    });

    it('Signup button should exists',function(done){
        browser.get("https://localhost:8443/");
        expect(element(by.css('#unverifiedHeader .signup')).isPresent()).toBeTruthy();
        done();
    });

    it('The Home Button takes me Home',function(done){
        browser.get("https://localhost:8443/");
        element(by.css('#unverifiedHeader .create')).click();
        element(by.css('#unverifiedHeader .home')).click();
        expect(element(by.css("#home")).isPresent()).toBeTruthy();
        done();
    });

    it('The Create Button takes me to Create',function(done){
        browser.get("https://localhost:8443/");
        element(by.css('#unverifiedHeader .create')).click();
        expect(element(by.css("#create")).isPresent()).toBeTruthy();
        done();
    });

    it('The Login Button shows me the login pop-up',function(done){
        browser.get("https://localhost:8443/");
        element(by.css('#unverifiedHeader .login')).click();
        expect(element(by.css("#login")).isPresent()).toBeTruthy();
        done();
    });

    it('The Sign-up button shows me the signup pop-up',function(done){
        browser.get("https://localhost:8443/");
        element(by.css('#unverifiedHeader .signup')).click();
        expect(element(by.css("#signup")).isPresent()).toBeTruthy();
        done();
    });

    it('The Login button twice shows then removes the login pop-up',function(done){
        browser.get("https://localhost:8443/");
        element(by.css('#unverifiedHeader .login')).click();
        expect(element(by.css("#login")).isPresent()).toBeTruthy();
        element(by.css('#unverifiedHeader .login')).click();
        expect(element(by.css("#login")).isPresent()).toBeFalsy();
        done();
    });

    it('The Sign-up Button twice shows then removes the sign-up pop-up',function(done){
        browser.get("https://localhost:8443/");
        element(by.css('#unverifiedHeader .signup')).click();
        expect(element(by.css("#signup")).isPresent()).toBeTruthy();
        element(by.css('#unverifiedHeader .signup')).click();
        expect(element(by.css("#signup")).isPresent()).toBeFalsy();
        done();
    });

    it('I can switch between login and signup with no effort', function(done){
        browser.get("https://localhost:8443/");
        element(by.css('#unverifiedHeader .signup')).click();
        expect(element(by.css("#signup")).isPresent()).toBeTruthy();
        expect(element(by.css("#login")).isPresent()).toBeFalsy();
        element(by.css('#unverifiedHeader .login')).click();
        expect(element(by.css("#signup")).isPresent()).toBeFalsy();
        expect(element(by.css("#login")).isPresent()).toBeTruthy();
        element(by.css('#unverifiedHeader .signup')).click();
        expect(element(by.css("#signup")).isPresent()).toBeTruthy();
        expect(element(by.css("#login")).isPresent()).toBeFalsy();
        element(by.css('#unverifiedHeader .login')).click();
        expect(element(by.css("#signup")).isPresent()).toBeFalsy();
        expect(element(by.css("#login")).isPresent()).toBeTruthy();
        done();
    });

    it('Clicking on the logo sends me home', function(done){
        browser.get("https://localhost:8443/");
        element(by.css('#unverifiedHeader .create')).click();
        element(by.css('#unverifiedHeader .logo')).click();
        expect(element(by.css("#home")).isPresent()).toBeTruthy();
        done();
    });
});