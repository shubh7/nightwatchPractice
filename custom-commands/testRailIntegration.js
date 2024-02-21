// TestRail apis to publish status and reports to test cases in TestRail
const testRailRunID = process.env.RUNID;
const superagent = require("superagent");
const testRailObj = require("../configs/testRail/testRailConfigs.json");
let testRunId = null;
let runId = null;


class ApiTest {

     /** 
     * Update model subscription
     * @author slaxmi
     * @param testUpdate
     * @param cookiename1
     * @param cookievalue1
     * @param cookiename2
     * @param cookievalue2
    */
    updateSubscription(testUpdate, cookiename1, cookievalue1, cookiename2, cookievalue2) {
        const api_url = "https://adviseruat.onglobalplatform.com/api/accounts/UK1000023706/modelSubscriptions";
        superagent.post(api_url)
            .disableTLSCerts()
            .set("Content-Type", "application/json")
            .set("Cookie", +cookiename1 + "=" + cookievalue1 + ";" + cookiename2 + "=" + cookievalue2)
            .send(testUpdate)
            .end((err, res) => {
                if (err) {
                    console.error(`\r\nError in posting request: ${err}\r\n`);
                    console.info(`Response Code: ${res.statusCode}\r\n`);
                } else {
                    console.info("\r\nRequest Posted successfully\r\n");
                    console.info(`Response Code: ${res.statusCode}\r\n`);
                }
            });
    }
/** 
     * Mark test case status(Pass, Fail etc.)
     * @author slaxmi
     * @param scenario
    */
    async publishStatus(scenario) {
        const testRailHost = testRailObj.host;
        const username = testRailObj.testRailUser;
        const apiKey = testRailObj.apiKey;
        const testId = scenario.testId;
        const testUpdate = {
            // TestRail equates 1 to passing and 5 to failing
            "status_id": (scenario.result.status === "PASSED") ? 1 : 5,
            "comment": (scenario.result.status === "PASSED") ? null : scenario.result.message,
        };
        const url = `https://${testRailHost}/index.php?/api/v2/add_result_for_case/${testRailRunID}/${testId}`;
        console.log("URL: ", url);
        superagent.post(url)
            .disableTLSCerts() // Allows for self-signed TestRail certificates, but not expired or invalid
            .set("Content-Type", "application/json")
            .auth(username, apiKey)
            .send(testUpdate)
            .end((err, res) => {
                if (err) {
                    console.error(`\r\nError posting to TestRail, received: ${err}\r\n`);
                    console.info(`Response Code: ${res.statusCode}\r\n`);
                } else {
                    console.info("\r\nTest result successfully posted to TestRail\r\n");
                    console.info(`Response Code: ${res.statusCode}\r\n`);
                }
            });
    }

/** 
     * get latest runId of testcase
     * @author slaxmi
     * @param scenario
     * @param fileName
    */
    async getRunIDOfTestCase(scenario, fileName) {
        const testRailHost = testRailObj.host;
        const username = testRailObj.testRailUser;
        const apiKey = testRailObj.apiKey;
        const testId = scenario.testId;
        const url = `https://${testRailHost}/index.php?/api/v2/get_results_for_run/${testRailRunID}/${testId}`;
        superagent.get(url)
            .disableTLSCerts() // Allows for self-signed TestRail certificates, but not expired or invalid
            .set("Content-Type", "application/json")
            .auth(username, apiKey)
            .end((err, res) => {
                if (err) {
                    console.error(`\r\nError posting to TestRail, received: ${err}\r\n`);
                    console.info(`Response Code: ${res.statusCode}\r\n`);
                } else {
                    console.info("\r\nGet request success\r\n");
                    console.info(`Response Code: ${res.statusCode}\r\n`);

                    testRunId = res.body.results[0].id;
                    console.info(`testRunId: ${testRunId}\r\n`);
                    this.reportAttach(testRunId, browser, fileName);
                }
            });
    }

    /** 
     * Attach Report to latest run id
     * @author slaxmi
     * @param runTestId
     * @param browser
     * @param fileName
    */

    reportAttach(runTestId, browser, fileName) {
        console.log(runTestId);
        const testRailHost = browser.globals.testRail.host;
        const username = process.env.TESTRAIL_USERNAME;
        const apiKey = process.env.TESTRAIL_API_KEY;
        console.log("Inside Send Attachment");
        const _addAttchmentUrl = `https://${testRailHost}/index.php?/api/v2/add_attachment_to_result/${runTestId}`;
        superagent.post(_addAttchmentUrl)
            .disableTLSCerts() // Allows for self-signed TestRail certificates, but not expired or invalid
            .set("Content-Type", "multipart/form-data")
            .auth(username, apiKey)
            .attach("attachment", "screenCaptures/" + fileName + ".jpg")
            .end((err, res) => {
                if (err) {
                    console.error(`\r\nError posting attachment to TestRail, received: ${err}\r\n`);
                    console.info(`Response Code: ${res.statusCode}\r\n`);
                    console.info(`Response Code: ${res.body.error}\r\n`);
                } else {
                    console.info("\r\nAttachment successfully posted to TestRail\r\n");
                }
            });
    }

    /** 
     * Attach Report to test run
     * @author slaxmi
    */
    async attachReportToTestRun() {
        const testRailHost = testRailObj.host;
        const username = testRailObj.testRailUser;
        const apiKey = testRailObj.apiKey;
        console.log("Inside Send Attachment");
        const _addAttchmentUrl = `https://${testRailHost}/index.php?/api/v2/add_attachment_to_run/${testRailRunID}`;
        console.log(_addAttchmentUrl);
        superagent.post(_addAttchmentUrl)
            .disableTLSCerts() // Allows for self-signed TestRail certificates, but not expired or invalid
            .set("Content-Type", "multipart/form-data")
            .auth(username, apiKey)
            .attach("attachment", "report/cucumber_report.html")
            .end((err, res) => {
                if (err) {
                    console.error(`\r\nError posting attachment to TestRail, received: ${err}\r\n`);
                    console.info(`Response Code: ${res.statusCode}\r\n`);
                    console.info(`Response Code: ${res.body.error}\r\n`);
                } else {
                    console.info("\r\nAttachment successfully posted to TestRail\r\n");
                }
            });
    }

}

module.exports = new ApiTest();
