//Verify List of accounts visible after click on account drop down
module.exports = class verifyListOfAccountsPresentForInvestor{
    async command() {
        const setting = browser.page.investorPortalPages.settings();     
       await setting.validateListOfAccounts();
        
       
   }
};