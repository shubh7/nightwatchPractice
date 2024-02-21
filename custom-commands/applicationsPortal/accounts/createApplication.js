module.exports = class createApplication {
    async command(accountType) {
        const data = browser.globals.testDataConfig;
        const account = browser.page.applicationsPortalPages.applicationAccounts();

        if (accountType == 'ISA' || accountType == 'GIA') {
            await account.enterAccountDetails(data.sourceOfFunds, accountType);
            await account.enterInitialCashInvestment(accountType);
            await account.enterRegularContribution();
            await account.addModel();
            await account.enterBankDetails(data.personalDetails.accountNo, data.personalDetails.sortCode);
            await browser.customElementClick(account.elements.continueButton);
        }

        if (accountType == 'SIPP' || accountType == 'International SIPP') {
            await account.enterContributionForSIPP();
            await browser.customElementClick(account.elements.continueButton);
        }
        const thirdPartyAccountType = new Set(['Offshore Bond', 'Offshore Bond Personalised', 'Onshore Bond', 'Third Party SIPP', 'RTSRATS', 'QROPS', 'Personal Pension','Group SIPP']);

        if (thirdPartyAccountType.has(accountType)) {
            await account.enterAccountDetails(data.sourceOfFunds, accountType);
            await account.selectProduct();
            await account.enterInitialCashInvestment(accountType);
            await account.addModel();
            await browser.customElementClick(account.elements.continueButton);
            await browser.customElementClick(account.elements.continueButton);
        }

    }
}