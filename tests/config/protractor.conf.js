exports.config = {
    seleniumServerJar: "../../node_modules/selenium/lib/runner/selenium-server-standalone-2.20.0.jar",
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        '../protractor/*.js'
    ],
    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    },
    allScriptsTimeout: 100000,
    getPageTimeout: 1000000,
    seleniumPort: 4444,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        print: function() {}
    },
    framework: 'jasmine'
}