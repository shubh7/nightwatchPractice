const { After, Before, AfterStep, setDefaultTimeout } = require("@cucumber/cucumber");
//const apiObj = require("./custom-commands/testRailIntegration");
const TEST_RAIL_INT = process.env.TESTRAIL;
const date = new Date();

const currentDate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + "-" + date.getHours() + "-" +
    date.getMinutes() + "-" + date.getSeconds() + "-" + date.getMilliseconds();

setDefaultTimeout(60000);

Before(async function (scenario) {
    console.log("Execution started for  :  ", scenario.pickle.name);
});


After((scenario) => new Promise(async (resolve) => {
    console.log("Updating Test Result in Test Rail for scenario : ", scenario.pickle.name);
    setTimeout(() => {
        resolve();
    }, 10000);
    let testRailId = null;
    const testRailTag = scenario.pickle.tags;
    const count = testRailTag.length;

    // Get scenario tag having numeric value
    for (let i = 0; i < count; i++) {
        if (testRailTag[i].name.match(/\d+/g)) {
            testRailId = testRailTag[i].name.replace("@", "");
            console.log("TestRail Id : ", testRailId);
        }
    }
    scenario.testId = testRailId;
    // Publish status of test case in TestRail
    if (TEST_RAIL_INT === "YES") {
        //await apiObj.publishStatus(scenario);
    }
    // Attach screenshot of failure steps to test case
    if (scenario.result.status === "FAILED" && TEST_RAIL_INT === "YES") {
       // await apiObj.getRunIDOfTestCase(scenario, "Screen" + currentDate);
    }
}));


AfterStep(async function (scenario) {
    if (scenario.result.status === "FAILED") {
        console.log("Attaching screenshot");
        const data = await browser.screenshot();
        const ss = Buffer.from(data, 'base64');
        this.attach(ss, 'image/png');
    }
});


