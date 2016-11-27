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

describe(`Database.checkUserNotExists`, ()=>{
    let MongoClient = MongoDB.MongoClient;
    let user1 = {
        email:'test1@test.test',
        password:'test'
    };
    let user2 = {
        email:'test2@test.test',
        password:'test'
    };
    let user3 = {
        email:'test3@test.test',
        password:'test'
    };


    before((done)=>{
        MongoClient.connect(Database.getURI(), (err,db)=>{
            expect(err).to.not.exist;
            db.collection('user').insert([user1,user2,user3],(err)=>{
                expect(err).to.not.exist;
                db.collection('user').find({}).toArray((err,result)=>{
                    expect(err).to.not.exist;
                    expect(result.length).to.equal(3);
                    db.close();
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

    it(`test user 1 should exist`, (done)=>{
        Database.checkUserNotExist(user1.email,(err,result)=>{
            expect(err).to.equal(`User already exists`);
            expect(result).to.not.exist;
            done();
        });
    });

    it(`test user 2 should exist`, (done)=>{
        Database.checkUserNotExist(user2.email,(err,result)=>{
            expect(err).to.equal(`User already exists`);
            expect(result).to.not.exist;
            done();
        });
    });

    it(`test user 3 should exist`, (done)=>{
        Database.checkUserNotExist(user3.email,(err,result)=>{
            expect(err).to.equal(`User already exists`);
            expect(result).to.not.exist;
            done();
        });
    });

    it(`test user 4 should  not exist`, (done)=>{
        Database.checkUserNotExist('test4@test.test',(err,result)=>{
            expect(err).to.not.exist;
            expect(result).to.be.true;
            done();
        });
    });
});