const importCwd = require('import-cwd')
const { When, Then, Given } = importCwd('@cucumber/cucumber')

When('User creates new {string} Applicant', async function (applicantType) {
  console.log(`Creating ${applicantType} applicant`);
  if (applicantType == 'Individual') {
    await browser.applicationsPortal.applicants.createUKIndividualApplicant();
  }
  if (applicantType == 'Trust') {
    await browser.applicationsPortal.applicants.createTrustApplicant();
  }
});

When('User creates {string} account using new Applicant', async function (accountType) {
  await browser.applicationsPortal.accounts.selectAccount(accountType);
  await browser.applicationsPortal.accounts.createApplication(accountType);


});

Then('New {string} Account created successfully', async function (accountType) {
  await browser.applicationsPortal.accounts.verifyApplicationCreatedSuccessfully();
  const data = browser.globals.testDataConfig;
  const digitalAccptfields = [];

  if (accountType == 'ISA' || accountType == 'GIA') {
    for (const value in data.digitalAcceptanceAttributesForISA) {
      digitalAccptfields.push(data.digitalAcceptanceAttributesForISA[value]);
    }
    await browser.applicationsPortal.accounts.verifySubmittedApplication(digitalAccptfields);

  }

  if (accountType == 'SIPP' || accountType == 'International SIPP') {
    for (const value in data.digitalAcceptanceAttributesForSIPP) {
      digitalAccptfields.push(data.digitalAcceptanceAttributesForSIPP[value]);
    }
    await browser.applicationsPortal.accounts.verifySubmittedApplication(digitalAccptfields);

  }
  await browser.applicationsPortal.accounts.verifyAccountCodeCreated();
});

Given('Advisor navigate to Applications {string}', async function (tab) {
  await browser.applicationsPortal.verifyTabsOfApplications(tab);
});


