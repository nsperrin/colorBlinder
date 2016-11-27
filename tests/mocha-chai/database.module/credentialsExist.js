/**
 * Created by Nick on 11/27/2016.
 */
'use strict';

let DBModule = require(`../../../util/database`);
let MongoDB = require(`mongodb`);
let Database = new DBModule();
let chai = require('chai');
let expect = require('chai').expect;
let bcrypt = require('bcrypt-nodejs');
let sinon = require('sinon');

describe(`Database.credentialsExist`,()=> {
    let MongoClient = MongoDB.MongoClient;
    let user = {
        email: 'test@test.test',
        password: 'test'
    };

    before((done)=>{
        Database.signUp(user,(err)=>{
            expect(err).to.not.exist;
            done();
        });
    });

    after((done)=>{
        MongoClient.connect(Database.getURI(), (err, db)=> {
            expect(err).to.not.exist;
            db.dropCollection('user', (err)=> {
                expect(err).to.not.exist;
                db.close();
                done();
            });
        });
    });

    it(`Good email and password`,(done)=>{
        Database.credentialsExist(user,(err)=>{
            expect(err).to.not.exist;
            done();
        });
    });

    it(`Good email and bad password`,(done)=>{
        Database.credentialsExist({email:user.email,password:'fake'},(err)=>{
            expect(err).to.equal('You do not have permission to modify these records!');
            done();
        });
    });

    it(`Bad email and good password`,(done)=>{
        Database.credentialsExist({email:'fake',password:user.password},(err)=>{
            expect(err).to.equal('You do not have permission to modify these records!');
            done();
        });
    });

    it(`Bad email and bad password`,(done)=>{
        Database.credentialsExist({email:'fake',password:'fake'},(err)=>{
            expect(err).to.equal('You do not have permission to modify these records!');
            done();
        });
    });
});