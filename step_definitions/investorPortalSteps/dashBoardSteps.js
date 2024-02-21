const importCwd = require('import-cwd')
const { Then } = importCwd('@cucumber/cucumber')

//const {Then,When} = require("@cucumber/cucumber");


Then("user should verify active tab as {string}", async function (tab) {
  const data = browser.globals.testDataConfig;
  await browser.investorPortal.selectInvestor(data.investor);
  await browser.investorPortal.selectTab(tab);
});

Then("Verify Personal assets and liabilities of investor on Dashboard", async function () {
  const data = browser.globals.testDataConfig;
  const personalFinanceInfo = [];
  for (const value in data.PersonalAssetsAndLiab) {
    personalFinanceInfo.push(data.PersonalAssetsAndLiab[value]);
  }
  console.log(personalFinanceInfo);
  await browser.investorPortal.dashBoard.validatePersonalAssetAndLiab(personalFinanceInfo);
});



Then('Verify Valuation History chart per account is displayed', async function () {
  const data = browser.globals.testDataConfig;
  try {
    await browser.investorPortal.dashBoard.validateValuationChartIsDisplayed(data.chartLabel);
  } catch (error) {
    throw new Error(`Validation failed: ${error.message}`);
  }
});

Then('Verify Activity section of Dashboard', async function () {
  const data = browser.globals.testDataConfig;
  await browser.investorPortal.dashBoard.validateActivitySection(data.dashBoardHeading);

});

Then('Verify after click on an account Account page should display', async function () {
  await browser.investorPortal.dashBoard.validateAccountPageIsDisplayedAfterClickOnAcctOnDB();
});

Then('Verify Investment Wrapper Summary', async function () {
  await browser.investorPortal.dashBoard.verifyInvestmentWrapper();
});

