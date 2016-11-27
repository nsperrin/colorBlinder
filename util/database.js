'use strict';

let MongoDB = require('mongodb');
let bcrypt = require('bcrypt-nodejs');

class Database {

    constructor(host,port,database){
        this.uri = `mongodb://${host||'localhost'}:${port||27017}/${database||'color_blinder_test'}`;
        this.MongoClient = MongoDB.MongoClient;
    }

    getURI(){
        return this.uri;
    }

    static validateUserData(user, next){
        if((user.email && user.password && ((!user.passwordConfirm) || (user.passwordConfirm === user.password)))){
            next(null,user);
        }else{
            next('User Credentials were either submitted or received incorrectly', null);
        }
    };

    static encryptUser(user,next){
        Database.validateUserData(user,(err, userData)=>{
            if(err) next(err, null);
            else
                bcrypt.hash(userData.password,null,null,(err,result)=>{
                    if(err) next(err,null);
                    else {
                        userData.password = result;
                        if (userData.passwordConfirm) delete userData.passwordConfirm;
                        next(null, userData);
                    }});
        });
    }

    getUser(email,next){
        this.MongoClient.connect(this.uri,(err,db)=>{
            if(err) next(err,null);
            else
                db.collection('user').find({email:email}).toArray(function(err,result){
                    db.close();
                    if(err) next(err,null);
                    else if(result.length == 0) next('User does not exist', null);
                    else next(null, result[0]);
                });
        });
    }

    checkUserNotExist(email,next){
        this.MongoClient.connect(this.uri, function(err,db){
            if(err) next(err,null);
            else
                db.collection('user').find({email:email}).toArray(function(err,result){
                    db.close();
                    if(err) next(err,null);
                    else if(result.length != 0) next('User already exists', null);
                    else next(null, true);
                });
        });
    }

    addUser(userData, next){
        userData.schemes = [];
        this.MongoClient.connect(this.uri,(err,db)=>{
            if(err) next(err);
            else
                db.collection('user').insert(userData, (err)=>{
                    db.close();
                    if(err) next(err);
                    else next(null);
                });
        });
    }

    signUp(user,next){
        Database.encryptUser(user,(err,userData)=>{
            if(err)next(err,null);
            else
                this.checkUserNotExist(userData.email, (err)=>{
                    if(err)next(err,null);
                    else
                        this.addUser(userData,(err)=>{
                            if(err)next(err,null);
                            else
                                this.getUser(userData.email,(err,result)=>{
                                    if(err) next(err,null);
                                    else next(null,result);
                                });
                        });
                });
        });
    }

    login(user,next){
        Database.validateUserData(user,(err, userData)=>{
            if(err)next(err,null);
            else
                this.getUser(user.email,(err,dbUser)=>{
                    if(err) next(err,null);
                    else
                        bcrypt.compare(userData.password,dbUser.password,(err,result)=>{
                            if(err) next(err,null);
                            else if(!result) next('Email or Password were incorrect');
                            else next(null,dbUser);
                        });
                });
        });
    }

    credentialsExist(user,next){
        this.MongoClient.connect(this.getURI(),(err,db)=>{
            if(err) next(err);
            else{
                db.collection('user').find({email:user.email,password:user.password}).toArray((err,result)=>{
                    db.close();
                    if(err) next(err);
                    else if(result.length != 1) next('You do not have permission to modify these records!');
                    else next(null);
                });
            }
        });
    };

    saveScheme(user,scheme,next){
        this.credentialsExist(user,(err)=>{
            if(err) next(err,null);
            else {
                scheme.name = scheme.name || `Scheme: ${user.schemes.length + 1}`;
                let foundFlag = false;
                user.schemes = user.schemes.map((elem)=> {
                    if (elem.name === scheme.name) {
                        foundFlag = true;
                    }
                    return (elem.name === scheme.name)?scheme: elem;
                });
                if (!foundFlag) {
                    user.schemes.unshift(scheme);
                }
                this.MongoClient.connect(this.getURI(), (err, db)=> {
                    if (err) next(err, user);
                    else
                        db.collection('user').update({email: user.email}, user, (err)=> {
                            db.close();
                            if (err) next(err, user);
                            else next(null, user);
                        });
                });
            }
        });
    }

    deleteScheme(user,scheme,next) {
        this.credentialsExist(user,(err)=>{
            if (err) next(err, null);
            else {
                user.schemes = user.schemes.filter((elem)=> {
                    return (elem.name !== scheme.name);
                });
                this.MongoClient.connect(this.getURI(), (err, db)=> {
                    if (err) next(err, user);
                    else
                        db.collection('user').update({email: user.email}, user, (err)=> {
                            db.close();
                            if (err) next(err, user);
                            else next(null, user);
                        });
                });
            }
        });
    }
}

module.exports = Database;
