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

describe(`Database.deleteScheme`,()=> {
    let MongoClient = MongoDB.MongoClient;
    let user = {
        email: 'test@test.test',
        password: 'test'
    };
    let s1 = {
        name: 's1',
        colors: 's1.1',
    };
    let s2 = {
        name: 's2',
        colors: 's2.1',
    };
    let s3 = {
        name: 's3',
        colors: 's3.1',
    };
    let s4 = {
        name: 's4',
        colors: 's4.1',
    };

    before((done)=>{
       Database.signUp(user,(err)=>{
           expect(err).to.not.exist;
           expect(user.schemes.length).to.equal(0);
           Database.saveScheme(user,s1,(err)=>{
               expect(err).to.not.exist;
               expect(user.schemes.length).to.equal(1);
               Database.saveScheme(user,s2,(err)=>{
                   expect(err).to.not.exist;
                   expect(user.schemes.length).to.equal(2);
                   Database.saveScheme(user,s3,(err)=>{
                       expect(err).to.not.exist;
                       expect(user.schemes.length).to.equal(3);
                       Database.saveScheme(user,s4,(err)=>{
                           expect(err).to.not.exist;
                           expect(user.schemes.length).to.equal(4);
                           done();
                       });
                   });
               });
           });
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

    it(`At 4, Deleting s4 should make it 3`, (done)=>{
        Database.deleteScheme(user,s4,(err)=>{
            expect(err).to.not.exist;
            expect(user.schemes.length).to.equal(3);
            expect(user.schemes[0].name).to.equal(s3.name);
            expect(user.schemes[0].colors).to.equal(s3.colors);
            MongoClient.connect(Database.getURI(),(err,db)=>{
                expect(err).to.not.exist;
                db.collection('user').find({email:user.email}).toArray((err,result)=>{
                    expect(err).to.not.exist;
                    expect(result[0].schemes.length).to.equal(3);
                    expect(result[0].schemes[0].name).to.equal(s3.name);
                    expect(result[0].schemes[0].colors).to.equal(s3.colors);
                    db.close();
                    done();
                });
            });
        });
    });

    it(`At 3, Deleting s1 should make it 2`, (done)=>{
        Database.deleteScheme(user,s1,(err)=>{
            expect(err).to.not.exist;
            expect(user.schemes.length).to.equal(2);
            expect(user.schemes[0].name).to.equal(s3.name);
            expect(user.schemes[0].colors).to.equal(s3.colors);
            MongoClient.connect(Database.getURI(),(err,db)=>{
                expect(err).to.not.exist;
                db.collection('user').find({email:user.email}).toArray((err,result)=>{
                    expect(err).to.not.exist;
                    expect(result[0].schemes.length).to.equal(2);
                    expect(result[0].schemes[0].name).to.equal(s3.name);
                    expect(result[0].schemes[0].colors).to.equal(s3.colors);
                    db.close();
                    done();
                });
            });
        });
    });

    it(`At 2, Deleting s3 should make it 1`, (done)=>{
        Database.deleteScheme(user,s3,(err)=>{
            expect(err).to.not.exist;
            expect(user.schemes.length).to.equal(1);
            expect(user.schemes[0].name).to.equal(s2.name);
            expect(user.schemes[0].colors).to.equal(s2.colors);
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

    it(`At 1, Deleting s2 should make it 0`, (done)=>{
        Database.deleteScheme(user,s2,(err)=>{
            expect(err).to.not.exist;
            expect(user.schemes.length).to.equal(0);
            expect(user.schemes[0]).to.not.exist;
            MongoClient.connect(Database.getURI(),(err,db)=>{
                expect(err).to.not.exist;
                db.collection('user').find({email:user.email}).toArray((err,result)=>{
                    expect(err).to.not.exist;
                    expect(result[0].schemes.length).to.equal(0);
                    expect(result[0].schemes[0]).to.not.exist;
                    db.close();
                    done();
                });
            });
        });
    });

    it(`At 0, Deleting s2 should keep it 0`, (done)=>{
        Database.deleteScheme(user,s2,(err)=>{
            expect(err).to.not.exist;
            expect(user.schemes.length).to.equal(0);
            expect(user.schemes[0]).to.not.exist;
            MongoClient.connect(Database.getURI(),(err,db)=>{
                expect(err).to.not.exist;
                db.collection('user').find({email:user.email}).toArray((err,result)=>{
                    expect(err).to.not.exist;
                    expect(result[0].schemes.length).to.equal(0);
                    expect(result[0].schemes[0]).to.not.exist;
                    db.close();
                    done();
                });
            });
        });
    });

    it('Giving a fake user email, should result in an error',(done)=>{
        Database.deleteScheme({email:'fake',password:user.password},{},(err)=>{
           expect(err).to.equal('You do not have permission to modify these records!');
           done();
        });
    });

    it('Giving a fake user password, should result in an error',(done)=>{
        Database.deleteScheme({email:user.email,password:'fake'},{},(err)=>{
            expect(err).to.equal('You do not have permission to modify these records!');
            done();
        });
    });

});