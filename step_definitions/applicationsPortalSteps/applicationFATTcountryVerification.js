const importCwd = require('import-cwd')
const { When, Then,Given } = importCwd('@cucumber/cucumber')

When('User creates new Applicant to verify FATF countries', async function () {
    const data = browser.globals.testDataConfig;
    await browser.applicationsPortal.applicants.createUKIndividualApplicantFATFCountry();
  });

Then('Verify the {string} error message and accounts button disbaled', async function (validationType) { 
    await browser.applicationsPortal.accounts.validateAccountSelectionDisabledforFATF(validationType);  
  });

