// Validate Refresh and Sync account
module.exports = class verifyRefreshAndSyncAccount {
    async command(msg) {
        const setting = browser.page.investorPortalPages.settings();
        const dashBoard=browser.page.investorPortalPages.dashBoard();

        await setting.verifyRefreshAndSyncStatus(msg);

        // Validate Sync button and Validate Dashboard valuation
        await dashBoard.validateDashboardValuation();
    }
};
