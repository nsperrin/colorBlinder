/**
 * Created by Nick on 10/1/2016.
 */
describe('Signing Up', function(){

    beforeEach(function(done){
        //do the signing out if I'm signed in

        //open the sigin popup
        browser.get("https://localhost:8443/");
        element(by.css(".signup")).click();
        done();
    });

    afterEach(function(done){
        //sign out if I'm signed in

        //close signin popup
        if(element(by.css('#signup')).isPresent()) {
            element(by.css(".signup")).click();
        }
        //remove any test users
        done()
    });

    it('has a place for email',function(done){
        expect(element(by.css("#signup #inputEmail")).isPresent()).toBeTruthy();
        done();
    });

    it('has a place for password',function(done){
        expect(element(by.css("#signup #inputPassword")).isPresent()).toBeTruthy();
        done();
    });

    it('has a place for password confirmation',function(done){
        expect(element(by.css("#signup #inputConfirmPassword")).isPresent()).toBeTruthy();
        done();
    });

    it('has a place for the submit button', function(done){
        expect(element(by.css("#signup #signUpButton")).isPresent()).toBeTruthy();
        done();
    });

    it('the email position only accepts strings in the format *@*',function(done){
        element(by.css("#signup #inputPassword")).sendKeys("testP@$$W0rd");
        element(by.css("#signup #inputConfirmPassword")).sendKeys("testP@$$W0rd");
        element(by.css("#signup #inputEmail")).sendKeys("");
        expect(element(by.css('#signup #signUpButton')).getAttribute('disabled')).toBeTruthy();
        element(by.css("#signup #inputEmail")).clear();
        element(by.css("#signup #inputEmail")).sendKeys("test");
        expect(element(by.css('#signup #signUpButton')).getAttribute('disabled')).toBeTruthy();
        element(by.css("#signup #inputEmail")).clear();
        element(by.css("#signup #inputEmail")).sendKeys("@test");
        expect(element(by.css('#signup #signUpButton')).getAttribute('disabled')).toBeTruthy();
        element(by.css("#signup #inputEmail")).clear();
        element(by.css("#signup #inputEmail")).sendKeys("test@test");
        expect(element(by.css('#signup #signUpButton')).getAttribute('disabled')).toBeTruthy();
        element(by.css("#signup #inputEmail")).clear();
        element(by.css("#signup #inputEmail")).sendKeys("test@test.test");
        expect(element(by.css('#signup #signUpButton')).getAttribute('disabled')).toBeFalsy();
        element(by.css("#signup #inputEmail")).clear();
        done();
    });

    it('the passwords must be the same before submission',function(done){
        element(by.css("#signup #inputEmail")).sendKeys("test@test.test");
        element(by.css("#signup #inputPassword")).sendKeys("1");
        element(by.css("#signup #inputConfirmPassword")).sendKeys("2");
        expect(element(by.css('#signup #signUpButton')).getAttribute('disabled')).toBeTruthy();
        element(by.css("#signup #inputPassword")).clear();
        element(by.css("#signup #inputConfirmPassword")).clear();

        element(by.css("#signup #inputPassword")).sendKeys("testP@$$W0rd");
        element(by.css("#signup #inputConfirmPassword")).sendKeys("2");
        expect(element(by.css('#signup #signUpButton')).getAttribute('disabled')).toBeTruthy();
        element(by.css("#signup #inputPassword")).clear();
        element(by.css("#signup #inputConfirmPassword")).clear();

        element(by.css("#signup #inputPassword")).sendKeys("1");
        element(by.css("#signup #inputConfirmPassword")).sendKeys("testP@$$W0rd");
        expect(element(by.css('#signup #signUpButton')).getAttribute('disabled')).toBeTruthy();
        element(by.css("#signup #inputPassword")).clear();
        element(by.css("#signup #inputConfirmPassword")).clear();

        element(by.css("#signup #inputPassword")).sendKeys("testP@$$W0rd");
        element(by.css("#signup #inputConfirmPassword")).sendKeys("testP@$$W0rd2");
        expect(element(by.css('#signup #signUpButton')).getAttribute('disabled')).toBeTruthy();
        element(by.css("#signup #inputPassword")).clear();
        element(by.css("#signup #inputConfirmPassword")).clear();

        element(by.css("#signup #inputPassword")).sendKeys("testP@$$W0rd");
        element(by.css("#signup #inputConfirmPassword")).sendKeys("testP@$$W0rd");
        expect(element(by.css('#signup #signUpButton')).getAttribute('disabled')).toBeFalsy();
        element(by.css("#signup #inputPassword")).clear();
        element(by.css("#signup #inputConfirmPassword")).clear();

        done();
    });

    it('when I submit and it is a new email address I am directed to the verified version of the page',function(done){
        element(by.css("#signup #inputEmail")).sendKeys("test@test.test");
        element(by.css("#signup #inputPassword")).sendKeys("testP@$$W0rd");
        element(by.css("#signup #inputConfirmPassword")).sendKeys("testP@$$W0rd");
        element(by.css('#signup #signUpButton')).click();
        browser.sleep(1000);
        expect(element(by.css('.logout')).isPresent()).toBeTruthy();
        done();
    });

    it('when I submit and it is an already in use email address I am given an error message',function(done){
        element(by.css("#signup #inputEmail")).sendKeys("test@test.test");
        element(by.css("#signup #inputPassword")).sendKeys("testP@$$W0rd");
        element(by.css("#signup #inputConfirmPassword")).sendKeys("testP@$$W0rd");
        element(by.css('#signup #signUpButton')).click();
        browser.sleep(1000);
        expect(element(by.css('#signup #error')).isPresent()).toBeTruthy();
        done();
    });
});