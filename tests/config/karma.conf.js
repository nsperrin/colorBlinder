/**
 * Created by Nick on 9/14/2016.
 */
module.exports = function(config) {
    config.set({
        basePath: '../..',
        frameworks: ['jasmine'],
        files: [
            'External_Libraries/*.js',
            'public/javascripts/angular/ui-routing.js',
            'public/javascripts/angular/changeInterpolation.js',
            'public/javascripts/angular/enableHTML5.js',
            'public/javascripts/angular/app.js',
            'public/javascripts/angular/masterController.js',
            'public/javascripts/angular/unverifiedHeader/loginForm/loginFormDirective.js',
            'public/javascripts/angular/unverifiedHeader/signUpForm/signUpFormDirective.js',
            'public/javascripts/*.js',
            'tests/karma-jasmine/*.js'
        ],
        exclude: [
        ],
        preprocessors: {},
        plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor',
            'karma-mocha-reporter',
            'karma-json-fixtures-preprocessor'
        ],
        reporters: [
            'mocha'
        ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};