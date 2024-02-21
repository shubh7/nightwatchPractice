// Validate Investment Wrapper on Dashboard
module.exports = class verifyInvestmentWrapper{
    async command() {
       const dashBoard = browser.page.investorPortalPages.dashBoard();
       // Assert Investment Wrapper Summary 
       await dashBoard.assertInvestmentWrapperSummaryIsPresent();  
       console.log("Asserting Activity Section Count Is More Than Zero")
       await browser.assertListLengthIsMoreThanZero(dashBoard.elements.investmentTable);  
   }
};