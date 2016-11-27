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

describe(`Database.addUser(user,next)`, ()=>{
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

    for(let i=1;i<=20;i++){
        it(`When I add user No.${i} there are ${i} users in the database`,(done)=>{
           Database.addUser({email:`test${i}@test.test`,password:'test'},(err)=>{
               expect(err).to.not.exist;
               MongoClient.connect(Database.getURI(),(err,db)=>{
                   expect(err).to.not.exist;
                   db.collection('user').find({}).toArray((err,result)=>{
                      db.close();
                      expect(err).to.not.exist;
                      expect(result.length).to.equal(i);
                      done();
                   });
               });
           });
        });
    }
});