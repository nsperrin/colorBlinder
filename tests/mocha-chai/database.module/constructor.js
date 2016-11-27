/**
 * Created by Nick on 11/25/2016.
 */
'use strict';

let Database = require(`../../../util/database`);
let chai = require('chai');
let expect = require('chai').expect;

describe(`Database.constructor(host(opt.),port(opt.),database(opt.))`,()=>{

    it(`Without a host, the host section of the uri is set to 'localhost'`, (done)=>{
        let testDB = new Database(null,27018,'color_blinder');
        let expectedURI = `mongodb://localhost:27018/color_blinder`;
        expect(testDB.getURI()).to.equal(expectedURI);
        done();
    });

    it(`Without a port, the port section of the uri is set to '27017'`, (done)=>{
        let testDB = new Database('notlocalhost',null,'color_blinder');
        let expectedURI = `mongodb://notlocalhost:27017/color_blinder`;
        expect(testDB.getURI()).to.equal(expectedURI);
        done();
    });

    it(`Without a database the database section of the uri is set to 'color_blinder_test'`,(done)=>{
        let testDB = new Database('notlocalhost',27018, null);
        let expectedURI = `mongodb://notlocalhost:27018/color_blinder_test`;
        expect(testDB.getURI()).to.equal(expectedURI);
        done();
    });

    it(`With a host, the host section of the uri is set to the host argument`, (done)=>{
        let testDB = new Database('notlocalhost',27018,'color_blinder');
        let expectedURI = `mongodb://notlocalhost:27018/color_blinder`;
        expect(testDB.getURI()).to.equal(expectedURI);
        done();
    });

    it(`With a port, the port section of the uri is set to port argument`, (done)=>{
        let testDB = new Database('notlocalhost',27018,'color_blinder');
        let expectedURI = `mongodb://notlocalhost:27018/color_blinder`;
        expect(testDB.getURI()).to.equal(expectedURI);
        done();
    });

    it(`With a database the database section of the uri is set to the database argument`, (done)=>{
        let testDB = new Database('notlocalhost',27018,'color_blinder');
        let expectedURI = `mongodb://notlocalhost:27018/color_blinder`;
        expect(testDB.getURI()).to.equal(expectedURI);
        done();
    });

});