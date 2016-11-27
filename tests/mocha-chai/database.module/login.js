/**
 * Created by Nick on 11/25/2016.
 */
'use strict';

let DBModule = require(`../../../util/database`);
let MongoDB = require(`mongodb`);
let Database = new DBModule();
let chai = require('chai');
let expect = require('chai').expect;
let bcrypt = require('bcrypt-nodejs');
let sinon = require('sinon');

describe(`Database.login(user,next)`, ()=>{
    let MongoClient = MongoDB.MongoClient;
    let user1 = {
        email: 'test1@test.test',
        password: 'test'
    };
    let user2 = {
        email: 'test2@test.test',
        password: 'test'
    };
    let user3 = {
        email: 'test3@test.test',
        password: 'test'
    };

    before((done)=>{
        Database.signUp(user1,(err)=> {
            expect(err).to.not.exist;
            Database.signUp(user2,(err)=> {
                expect(err).to.not.exist;
                Database.signUp(user3,(err)=> {
                    expect(err).to.not.exist;
                    user1.password = 'test';
                    user2.password = 'test';
                    user3.password = 'test';
                    done();
                });
            });
        });
    });

    after((done)=>{
        MongoClient.connect(Database.getURI(), (err,db)=>{
            expect(err).to.not.exist;
            db.dropCollection('user',(err)=>{
                expect(err).to.not.exist;
                db.collection('user').find({}).toArray((err,result)=>{
                    expect(err).to.not.exist;
                    expect(result.length).to.equal(0);
                    db.close();
                    done();
                });
            });
        });
    });

    it(`When user1 logs in there is no err`,(done)=>{
        Database.login(user1,(err)=>{
            expect(err).to.not.exist;
            done();
        });
    });

    it(`When user3 logs in there is no err`,(done)=>{
        Database.login(user2,(err)=>{
            expect(err).to.not.exist;
            done();
        });
    });

    it(`When user3 logs in there is no err`,(done)=>{
        Database.login(user3,(err)=>{
            expect(err).to.not.exist;
            done();
        });
    });

    it(`When a user that is not in the database logs in there is an error`, (done)=>{
        let badUser = {
            email:'test4@test.test',
            password:'test'
        };
        Database.login(badUser,(err)=>{
            expect(err).to.exist;
            expect(err).to.equal('User does not exist');
            done();
        });
    });

    it(`When a user that is in the database logs in with  bad password there is an error`,(done)=>{
        let badUser = {
            email:'test1@test.test',
            password:'nottest'
        };
        Database.login(badUser,(err)=>{
            expect(err).to.exist;
            expect(err).to.equal('Email or Password were incorrect');
            done();
        });
    });

});