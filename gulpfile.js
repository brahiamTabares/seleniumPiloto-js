const gulp = require('gulp');
const reporter = require('cucumber-html-reporter');
const options = {
    theme: 'bootstrap',
    jsonFile: "./reports/cucumber-json-report.json",
    output: "./reports/cucumber-html-report.html",
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "STAGING",
        "Browser": "Chrome 118.0.5993.89",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};

gulp.task('cucumberReports', function (done) {
    reporter.generate(options, done);
});