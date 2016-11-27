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


describe(`Database.signUp(user,next)`, ()=> {
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

    after((done)=> {
        MongoClient.connect(Database.getURI(), (err, db)=> {
            expect(err).to.not.exist;
            db.dropCollection('user', (err)=> {
                expect(err).to.not.exist;
                db.collection('user').find({}).toArray((err, result)=> {
                    expect(err).to.not.exist;
                    expect(result.length).to.equal(0);
                    db.close();
                    done();
                });
            });
        });
    });


    it(`Given a user is not valid, an error is passed to next`, (done)=>{
        let user = {
            email:'test2@test.test'
        };
        Database.signUp(user,(err)=>{
            expect(err).to.equal('User Credentials were either submitted or received incorrectly');
            done();
        });
    });

    it(`Given a user is already in the system, an error is passed to next`, (done)=>{
        let user = {
            email:'test1@test.test',
            password:'test'
        };
        Database.signUp(user,(err)=>{
            expect(err).to.equal('User already exists');
            done();
        });
    });

    it(`Given a user is not already in the system, no error is passed and user is in the database`, (done)=>{
        let user = {
            email:'test4@test.test',
            password:'test'
        };
        let pass = 'test';
        Database.signUp(user,(err)=>{
            expect(err).to.not.exist;
            MongoClient.connect(Database.getURI(),(err,db)=>{
                expect(err).to.not.exist;
                db.collection('user').find({email:user.email}).toArray((err,result)=>{
                    expect(err).to.not.exist;
                    expect(result.length).to.equal(1);
                    bcrypt.compare(pass,result[0].password,(err,result)=>{
                        expect(err).to.not.exist;
                        expect(result).to.be.true;
                        db.close();
                        done();
                    });
                });
            });
        });
    });

});
