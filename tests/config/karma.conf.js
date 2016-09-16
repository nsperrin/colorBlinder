/**
 * Created by Nick on 9/14/2016.
 */
module.exports = function(config) {
    config.set({
        basePath: '../..',
        frameworks: ['jasmine'],
        files: [
            'public/javascripts/*.js',
            'tests/karma-jasmine/*.js'
        ],
        exclude: [
        ],
        preprocessors: {},
        plugins : [
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
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