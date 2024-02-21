const importCwd = require('import-cwd')
const { When, Then } = importCwd('@cucumber/cucumber')



  When('Advisor click on the {string} tab', async function (tab) {
    await browser.advisorPortal.verifyAllTabs(tab);
  });

  Then('Advisor should be redirected to the Dashboard page', function () {
    console.log("Advisor should be redirected to the Dashboard page")
  });
