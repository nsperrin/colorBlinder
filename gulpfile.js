/**
 * Created by Nick on 10/1/2016.
 */
/*jshint node: true, camelcase: false*/
/*global require: true*/

'use strict';

var gulp = require('gulp'),
    gulpProtractorAngular = require('gulp-angular-protractor');

var shell = require('gulp-shell');
var mocha = require('gulp-mocha');
var Server = require('karma').Server;

gulp.task('protractor', function(callback) {
    gulp
        .src(['tests/protractor/*.js'])
        .pipe(gulpProtractorAngular({
            'configFile': 'tests/config/protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});


gulp.task('mocha', function () {
    gulp.src('tests/mocha-chai/*.js')
        .pipe(mocha({
            useColors: true
        }));
});

gulp.task('karma', function (done) {
    new Server({
        configFile: __dirname + '\\tests\\config\\karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('allTests', shell.task([
    'gulp mocha',
    'gulp karma',
    'gulp protractor'
]));
