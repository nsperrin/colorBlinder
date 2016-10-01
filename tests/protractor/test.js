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
        expect(element(by.css('#unverifiedHeader'))).toBeDefined();
        done();
    });

    it('Home button should exists',function(done){
        browser.get("https://localhost:8443/");
        expect(element(by.css('#unverifiedHeader .home'))).toBeDefined();
        done();
    });

    it('Create button should exists',function(done){
        browser.get("https://localhost:8443/");
        expect(element(by.css('#unverifiedHeader .create'))).toBeDefined();
        done();
    });

    it('Login button should exists',function(done){
        browser.get("https://localhost:8443/");
        expect(element(by.css('#unverifiedHeader .login'))).toBeDefined();
        done();
    });

    it('Signup button should exists',function(done){
        browser.get("https://localhost:8443/");
        expect(element(by.css('#unverifiedHeader .signup'))).toBeDefined();
        done();
    });

    it('The Home Button takes me Home',function(done){
        browser.get("https://localhost:8443/");
        element(by.css('#unverifiedHeader .home')).click();
        expect(element(by.css("#home"))).toBeDefined();
        done();
    });

    it('The Home Button takes me to Create',function(done){
        browser.get("https://localhost:8443/");
        element(by.css('#unverifiedHeader .create')).click();
        expect(element(by.css("#create"))).toBeDefined();
        done();
    });
});