const importCwd = require('import-cwd')
const {Then} = importCwd('@cucumber/cucumber')


Then("Validate night mode is working as expected", async function() {
    await browser.investorPortal.topRightHandMenus.verifyDayAndNightModes();
    
});


Then("Verify market valuation should be updated based on the currency selected", async function() {
    const data=browser.globals.testDataConfig;
    console.log(data.currencies.indianCurr);
    await browser.investorPortal.topRightHandMenus.verifyValuationAsPerCurrencySelected(data.currencies.indianCurr);
});


Then("Verify at the top right hand corner default currency should be displayed as {string}", async function(currency) {
    await browser.investorPortal.topRightHandMenus.verifyDefaultCurrencyOfValuation(currency);
});

Then("Verify Refresh and Sync should be working as expected", async function() {
    const data=browser.globals.testDataConfig;
    await browser.investorPortal.topRightHandMenus.verifyRefreshAndSyncAccount(data.syncWarningMsg);
});

Then('Verify after click on client dropdown list of accounts should be visible', async function () {
    await browser.investorPortal.topRightHandMenus.verifyListOfAccountsPresentForInvestor();
  });


