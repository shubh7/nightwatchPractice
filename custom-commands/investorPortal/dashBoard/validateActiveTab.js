// Validate active tab after selecting investor
module.exports = class validateActiveTab{
    async command(tab) {
        const dashBoard = browser.page.investorPortalPages.dashBoard();
        await dashBoard.validateActiveTab(tab);
    }
};
