/**
 * Created by Nick on 11/25/2016.
 */
'use strict';

let Database = require(`../../../util/database`);
let chai = require('chai');
let expect = require('chai').expect;

describe(`Database.validateUserData(user,next)`, ()=>{
    let expectedError = `User Credentials were either submitted or received incorrectly`;



    it(`Given a user without an email or password, it should call next with (err,null)`, (done)=>{
        let user = {};
        Database.validateUserData(user,(err, userData)=>{
            expect(err).to.equal(expectedError);
            expect(userData).to.not.exist;
            done();
        });
    });

    it(`Given a user without an email but with a password, it should call next with (err,null)`, (done)=>{
        let user = {
            password:`test`
        };
        Database.validateUserData(user,(err, userData)=>{
            expect(err).to.equal(expectedError);
            expect(userData).to.not.exist;
            done();
        });
    });

    it(`Given a user without an password but with an email, it should call next with (err,null)`, (done)=>{
        let user = {
            email:`test@test.test`
        };
        Database.validateUserData(user,(err, userData)=>{
            expect(err).to.equal(expectedError);
            expect(userData).to.not.exist;
            done();
        });
    });

    it(`Given a user with an email, password, and mismatched passwordConfirm, it should call next with (err,null)`, (done)=>{
        let user = {
            email: `test@test.test`,
            password:`test`,
            passwordConfirm: `notTest`
        };
        Database.validateUserData(user,(err, userData)=>{
            expect(err).to.equal(expectedError);
            expect(userData).to.not.exist;
            done();
        });
    });

    it(`Given a user with an email and password, it should call next with (null, user)`, (done)=>{
        let user = {
            email:`test@test.test`,
            password:`test`
        };
        Database.validateUserData(user,(err, userData)=>{
            expect(err).to.not.exist;
            expect(userData.email).to.equal(user.email);
            expect(userData.password).to.equal(user.password);
            done();
        });
    });

    it(`Given a user with an email, password, and matching password Confirm it should call next with (null, user)`, (done)=>{
        let user = {
            email: `test@test.test`,
            password:`test`,
            passwordConfirm: `test`
        };
        Database.validateUserData(user,(err, userData)=>{
            expect(err).to.not.exist;
            expect(userData.email).to.equal(user.email);
            expect(userData.password).to.equal(user.password);
            expect(userData.passwordConfirm).to.equal(user.passwordConfirm);
            done();
        });
    });

});