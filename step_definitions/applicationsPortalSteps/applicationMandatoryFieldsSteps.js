const importCwd = require('import-cwd')
const { When, Then } = importCwd('@cucumber/cucumber')


When('User creates new {string} Applicant without mandatory fields', async function (string) {
    console.log(`Creating ${string} applicant`);
    await browser.applicationsPortal.applicants.createUKIndividualApplicantWOMandatoryFields();
  });


  When('User creates {string} account using new Applicant without {string}', async function (accountType, fields) {
    await browser.applicationsPortal.accounts.selectAccount(accountType);
    await browser.applicationsPortal.accounts.createApplicationForApplicantWOMandatoryFields(fields);
  });

  Then('Validate Applicant Mandatory fields for {string} applicant', async function (applicantType) {
    const data = browser.globals.testDataConfig;
    const mandatoryFields = [];

    if(applicantType == 'Individual'){
        for (const value in data.individualApplicantMandatoryFields) {
          mandatoryFields.push(data.individualApplicantMandatoryFields[value]);
        }
    await browser.applicationsPortal.applicants.validateApplicantMandatoryFields(mandatoryFields);
  }
    
  });

  Then('Validate message for missing {string} details', async function (expectedValue) {
    await browser.applicationsPortal.accounts.validateAccountMandatoryFields(expectedValue);
    
  });
