// Validate Account Page is displayed
module.exports = class validateAccountPageIsDisplayedAfterClickOnAcctOnDB{
    async command() {
       const dashBoard = browser.page.investorPortalPages.dashBoard(); 
       //Validate Account number after click
       await dashBoard.validateAccountPage();
       //Validate Net Cash Movement of Account on account Page
       await dashBoard.validateNetCashMovement();
       //Validate Expenses of Account on account Page
       await dashBoard.validateExpenses();

        
       
   }
};