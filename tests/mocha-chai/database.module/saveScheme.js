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

describe(`Database.saveScheme`,()=>{
    let MongoClient = MongoDB.MongoClient;
    let user = {
        email:'test@test.test',
        password:'test'
    };
    let s1 = {
        name:'s1',
        colors:'s1.1',
    };
    let s2 = {
        name:'s1',
        colors:'s1.2',
    };
    let s3 = {
        name:'s1',
        colors:'s1.3',
    };
    let s4 = {
        name:'s2',
        colors:'s2.1',
    };
    let s5 = {
        colors:'Where my name at?'
    };

    before((done)=>{
        Database.signUp(user,(err,userData)=>{
            expect(err).to.not.exist;
            done();
        });
    });

    after((done)=>{
        MongoClient.connect(Database.getURI(),(err,db)=>{
            expect(err).to.not.exist;
            db.dropCollection('user',(err)=>{
                expect(err).to.not.exist;
                db.close();
                done();
            });
        });
    });

    it(`Given I have no schemes, and I want to add one, I add a new scheme`,(done)=>{
        Database.saveScheme(user,s1,(err,userData)=>{
            user = userData;
            expect(userData.schemes.length).to.equal(1);
            expect(userData.schemes[0].name).to.equal(s1.name);
            expect(userData.schemes[0].colors).to.equal(s1.colors);
            MongoClient.connect(Database.getURI(),(err,db)=>{
                expect(err).to.not.exist;
                db.collection('user').find({email:user.email}).toArray((err,result)=>{
                    expect(err).to.not.exist;
                    expect(result[0].schemes.length).to.equal(1);
                    expect(result[0].schemes[0].name).to.equal(s1.name);
                    expect(result[0].schemes[0].colors).to.equal(s1.colors);
                    db.close();
                    done();
                });
            });
        });
    });

    it(`Given I have a scheme, and I want to add one, it has the same name, so I update it`,(done)=>{
        Database.saveScheme(user,s2,(err,userData)=>{
            user = userData;
            expect(userData.schemes.length).to.equal(1);
            expect(userData.schemes[0].name).to.equal(s2.name);
            expect(userData.schemes[0].colors).to.equal(s2.colors);
            MongoClient.connect(Database.getURI(),(err,db)=>{
                expect(err).to.not.exist;
                db.collection('user').find({email:user.email}).toArray((err,result)=>{
                    expect(err).to.not.exist;
                    expect(result[0].schemes.length).to.equal(1);
                    expect(result[0].schemes[0].name).to.equal(s2.name);
                    expect(result[0].schemes[0].colors).to.equal(s2.colors);
                    db.close();
                    done();
                });
            });
        });
    });

    it(`Given I have a scheme, and I want to add one it has a different name so I add a new one,`,(done)=>{
        Database.saveScheme(user,s4,(err,userData)=>{
            user = userData;
            expect(userData.schemes.length).to.equal(2);
            expect(userData.schemes[0].name).to.equal(s4.name);
            expect(userData.schemes[0].colors).to.equal(s4.colors);
            MongoClient.connect(Database.getURI(),(err,db)=>{
                expect(err).to.not.exist;
                db.collection('user').find({email:user.email}).toArray((err,result)=>{
                    expect(err).to.not.exist;
                    expect(result[0].schemes.length).to.equal(2);
                    expect(result[0].schemes[0].name).to.equal(s4.name);
                    expect(result[0].schemes[0].colors).to.equal(s4.colors);
                    db.close();
                    done();
                });
            });
        });
    });

    it(`Given I have a scheme, and I want to add one, It has no name, so I will add a new one`,(done)=>{
        Database.saveScheme(user,s5,(err,userData)=>{
            user = userData;
            expect(userData.schemes.length).to.equal(3);
            expect(userData.schemes[0].name).to.equal('Scheme: 3');
            expect(userData.schemes[0].colors).to.equal(s5.colors);
            MongoClient.connect(Database.getURI(),(err,db)=>{
                expect(err).to.not.exist;
                db.collection('user').find({email:user.email}).toArray((err,result)=>{
                    expect(err).to.not.exist;
                    expect(result[0].schemes.length).to.equal(3);
                    expect(result[0].schemes[0].name).to.equal('Scheme: 3');
                    expect(result[0].schemes[0].colors).to.equal(s5.colors);
                    db.close();
                    done();
                });
            });
        });
    });

    it(`Given I already have a few schemes, and I want to update one, by saving with the same name, I update`, (done)=>{
        Database.saveScheme(user,s3,(err,userData)=>{
            user = userData;
            expect(userData.schemes.length).to.equal(3);
            expect(userData.schemes[2].name).to.equal(s3.name);
            expect(userData.schemes[2].colors).to.equal(s3.colors);
            MongoClient.connect(Database.getURI(),(err,db)=>{
                expect(err).to.not.exist;
                db.collection('user').find({email:user.email}).toArray((err,result)=>{
                    expect(err).to.not.exist;
                    expect(result[0].schemes.length).to.equal(3);
                    expect(result[0].schemes[2].name).to.equal(s3.name);
                    expect(result[0].schemes[2].colors).to.equal(s3.colors);
                    db.close();
                    done();
                });
            });
        });
    });

    it('Giving a fake user email, should result in an error',(done)=>{
        Database.saveScheme({email:'fake',password:user.password},{},(err)=>{
            expect(err).to.equal('You do not have permission to modify these records!');
            done();
        });
    });

    it('Giving a fake user password, should result in an error',(done)=>{
        Database.saveScheme({email:user.email,password:'fake'},{},(err)=>{
            expect(err).to.equal('You do not have permission to modify these records!');
            done();
        });
    });

});