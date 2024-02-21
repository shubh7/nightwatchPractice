// Select investor
module.exports = class selectInvestor {
    async command(investor) {
        const investorLst = browser.page.investorPortalPages.investorList();
        // Select Investor
        await investorLst.selectSearchedInvestor(investor);
        await browser.switchToWindow1();
        
    }
};

