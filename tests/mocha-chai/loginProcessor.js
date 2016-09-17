var expect = require('chai').expect;
var lp = require('../../routes/modules/loginProcessor');
var sinon = require('sinon');

describe('Tests for loginProcessor', function(){
    describe('Tests for hasRequiredData', function(){
        it('If not email or password, should call error with error', function(done){
            var data, socket;
            data = {};
            socket = {emit:function(){}};
            lp.isValidCredentials = sinon.spy();
            lp.sendResponse = sinon.spy();
            lp.hasRequiredData(socket,data);
            expect(lp.isValidCredentials.callCount).to.equal(0);
            expect(lp.sendResponse.callCount).to.equal(1);
            expect(lp.sendResponse.calledWith(socket.emit,{err:"Insufficient data was recieved please try again!"})).to.be.true;
            lp.sendResponse.reset();
            lp.isValidCredentials.reset();
            done();
        });

        it('If not email but has password, should call next with error', function(done){
            var data, socket;
            data = {password:'testPWord'};
            socket = {emit:function(){}};
            lp.isValidCredentials = sinon.spy();
            lp.sendResponse = sinon.spy();
            lp.hasRequiredData(socket,data);
            expect(lp.isValidCredentials.callCount).to.equal(0);
            expect(lp.sendResponse.callCount).to.equal(1);
            expect(lp.sendResponse.calledWith(socket.emit,{err:"Insufficient data was recieved please try again!"})).to.be.true;
            lp.sendResponse.reset();
            lp.isValidCredentials.reset();
            done();
        });

        it('If has email, but not password, should call next with error', function(done){
            var data, socket;
            data = {email:'test@email.com'};
            socket = {emit:function(){}};
            lp.isValidCredentials = sinon.spy();
            lp.sendResponse = sinon.spy();
            lp.hasRequiredData(socket,data);
            expect(lp.isValidCredentials.callCount).to.equal(0);
            expect(lp.sendResponse.callCount).to.equal(1);
            expect(lp.sendResponse.calledWith(socket.emit,{err:"Insufficient data was recieved please try again!"})).to.be.true;
            lp.sendResponse.reset();
            lp.isValidCredentials.reset();
            done();
        });

        it('If has email, and password, should call isValidCredentials with three args passed in', function(done){
            var data, socket;
            data = {email:'test@email.com',password:'testPWord'};
            socket = {emit:function(){}};
            lp.isValidCredentials = sinon.spy();
            lp.sendResponse = sinon.spy();
            lp.hasRequiredData(socket,data);
            expect(lp.isValidCredentials.callCount).to.equal(1);
            expect(lp.sendResponse.callCount).to.equal(0);
            expect(lp.isValidCredentials.calledWith(socket,data)).to.be.true;
            lp.sendResponse.reset();
            lp.isValidCredentials.reset();
            done();
        });
    });

    describe('Tests for isValidCredentials', function(){

    });

    describe('Tests for sendsResponse', function(){
        it('If Called With Error then calls socket.emit(loginError, data)', function(done){
            var emit = sinon.spy();
            emit('loginError',{err:'testError'});
            lp.sendResponse({err:'testError'},emit);
            console.log(emit.callCount);
            expect(emit.callCount).to.equal(1);
            console.log(JSON.stringify(emit.args));
            expect(emit.calledWith('loginError',{err:'testError'})).to.be.true;
            done();
        });

        it('If Called with out error, and with data then socket.handshake.session.userdata = data', function(done){
            done();
        });

        it('If Called with out error, and wiith data then calls socket.emit(loginSuccess, data)', function(done){
            done();
        });
    });
});