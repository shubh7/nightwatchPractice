// Validate Personal is saved
module.exports = {
    async command() {
        const dashBoard = browser.page.investorPortalPages.dashBoard();
        await dashBoard.getDashboardValuation();
        await dashBoard.updatePersonalAssetAndLiab();
    },
};