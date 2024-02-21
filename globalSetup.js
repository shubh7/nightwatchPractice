const TEST_RAIL_INT = process.env.TESTRAIL;
const env = process.env.KEY;
const apiObj = require("../onboardingEngagement/custom-commands/testRailIntegration");
const reporter = require("cucumber-html-reporter");

const options = {
    theme: "bootstrap",
    jsonFile: "report/cucumber_report.json",
    output: "report/cucumber_report.html",
    screenshotsDirectory: "screenCaptures/",
    storeScreenshots: false,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": env,
        "Browser": "Chrome  111.0.0",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Cloud",
    },
};


module.exports = {

    // beforeEach: function (browser, done) {
    //     browser.window.setSize(1024, 768, function (result) {
    //         console.log('window resized successfully');
    //         done();
    //       });
    // },

    after: function(done) {
        reporter.generate(options);
        if (TEST_RAIL_INT === "YES") {
            apiObj.attachReportToTestRun();
            done();
        } else {
            console.log("No new test run required");
            done();
        }
    },

};

