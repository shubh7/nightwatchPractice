const importCwd = require('import-cwd')
const { Given, When } = importCwd('@cucumber/cucumber')


Given('User Login to {string} as LoginOption', async function (loginOption) {
    const user=browser.globals.userConfig;
    await browser.globalAppsLogin(user,loginOption);
  });

When("User Select Investor as LoginOption", async function() {
    const data=browser.globals.testDataConfig;
    await browser.selectInvestor(data.investor);
});

