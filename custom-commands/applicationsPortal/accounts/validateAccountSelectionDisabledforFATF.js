// validate FATF country Account selection options are disabled

module.exports = class validateAccountSelectionDisabledforFATF {
  async command(verificationType) {
    let countryFieldErrorMessages =
      browser.globals.testDataConfig.fatfCountryErrorMeesgae;

    let countryFieldErrorMessagesNationality =
      browser.globals.testDataConfig.fatfCountryNationalityErrorMessage;

    const applicationAccounts =
      browser.page.applicationsPortalPages.applicationAccounts();
    const manageApplicant =
      browser.page.applicationsPortalPages.manageApplicant();

    if (verificationType.includes("error")) {
      //Verify Country  Fields
      for (let i = 0; i < countryFieldErrorMessages.length; i++) {
        let datapack = countryFieldErrorMessages[i];

        await browser.assertEqualElementText(
          manageApplicant.elements.countryVerificationLabel,
          datapack
        );
      }

      for (let i = 0; i < countryFieldErrorMessagesNationality.length; i++) {
        let datapack = countryFieldErrorMessagesNationality[i];

        await browser.assertEqualElementText(
          manageApplicant.elements.countryVerificationNationalityLabel,
          datapack
        );
      }


      await browser.customElementClick(manageApplicant.elements.saveButton);
    } else {
      await browser.customElementClick(manageApplicant.elements.saveButton);
      

      browser.waitForElementNotPresent(applicationAccounts.elements.morningstarWealthAccountsHeader, 5000, function(result) {
        this.assert.equal(result.status, 0, 'Element is not present');
    });
    }
  }
};
