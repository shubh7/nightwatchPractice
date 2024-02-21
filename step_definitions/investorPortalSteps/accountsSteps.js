const importCwd = require('import-cwd')
const {Then} = importCwd('@cucumber/cucumber')


Then('Verify Asset allocation breakdown charts appear on Account Page for Investments', async function () {
  await browser.investorPortal.accounts.validateAssetAllocationChartBreakdown();
  });

  Then('Verify the holdings list only show holdings within that account', async function () {
    await browser.investorPortal.accounts.verifyHoldingListAsPerAccount();
  });