module.exports = class createApplicationForApplicantWOMandatoryFields {
    async command(fields){
        const data=browser.globals.testDataConfig;
        const account = browser.page.applicationsPortalPages.applicationAccounts();

        if(fields == 'Applicant fields'){
        await account.enterAccountDetails(data.sourceOfFunds);
        await account.enterInitialCashInvestment();
        await account.enterRegularContribution();
        await account.addModel();
        await account.enterBankDetails(data.personalDetails.accountNo,data.personalDetails.sortCode);
        await browser.customElementClick(account.elements.continueButton);
    }

    if(fields == 'bank details'){
        await account.enterAccountDetails(data.sourceOfFunds);
        await account.enterInitialCashInvestment();
        await account.addModel();
        await browser.perform(function () {
            const actions = this.actions({ async: true });
            return actions
                .keyDown(browser.Keys.TAB)
                .pause(500)
        });
        await browser.customElementClick(account.elements.continueButton);
    }
    
    if(fields == 'model'){
        await account.enterAccountDetails(data.sourceOfFunds);
        await account.enterInitialCashInvestment();
        await account.enterRegularContribution();
        await account.enterBankDetails(data.personalDetails.accountNo,data.personalDetails.sortCode);
        await browser.customElementClick(account.elements.continueButton);
    }

    if(fields == 'investment'){
        await account.enterAccountDetails(data.sourceOfFunds);
        await account.addModel();
        await account.enterBankDetails(data.personalDetails.accountNo,data.personalDetails.sortCode);
        await browser.customElementClick(account.elements.continueButton);
    }
    

   
    }
}