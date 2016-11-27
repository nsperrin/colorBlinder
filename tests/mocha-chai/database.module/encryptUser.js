/**
 * Created by Nick on 11/25/2016.
 */
'use strict';

let Database = require(`../../../util/database`);
let chai = require('chai');
let expect = require('chai').expect;
let bcrypt = require('bcrypt-nodejs');
let sinon = require('sinon');

describe(`Database.encryptUser(user,next)`,()=>{

    beforeEach((done)=>{
        sinon.spy(Database, "validateUserData");
        done();
    });

    afterEach((done)=>{
        Database.validateUserData.restore(); // Unwraps the spy
        done();
    });

    it(`Calls Database.validateUser`,(done)=>{
        Database.encryptUser({},()=>{});
        expect(Database.validateUserData.called).to.be.ok;
        done();
    });

    it(`Given invalid user, then next called with (err, null)`, (done)=>{
        let user = {
            email:''
        };
        Database.encryptUser(user,(err,userData)=>{
            expect(userData).to.not.exist;
            expect(err).to.equal('User Credentials were either submitted or received incorrectly');
            done();
        });
    });

    it(`Given valid user with passwordConfirm, next called where user does not have passwordConfirm`, (done)=>{
        let user = {
            email:'test@test.test',
            password:'test',
            passwordConfirm: 'test'
        };
        Database.encryptUser(user,(err,userData)=>{
            expect(err).to.not.exist;
            expect(userData.passwordConfirm).to.not.exist;
            done();
        });
    });

    it(`Given a valid user the original password should pass bcrypt.compare with new password`, (done)=>{
        let user = {
            email:'test@test.test',
            password:'test',
            passwordConfirm: 'test'
        };
        let pass = 'test';//because objects are passed by reference
        Database.encryptUser(user,(err,userData)=>{
            expect(err).to.not.exist;
            expect(userData.passwordConfirm).to.not.exist;
            expect(userData.email).to.equal(user.email);
            bcrypt.compare(pass,userData.password,(err,result)=>{
                expect(result).to.be.ok;
                expect(err).to.not.exist;
                done();
            });
        });
    });

});