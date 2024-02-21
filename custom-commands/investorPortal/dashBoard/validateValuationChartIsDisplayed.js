const { tr } = require("@faker-js/faker");

// Validate Valuation chart
module.exports = {
    async command(chartText) {
        const setting = browser.page.investorPortalPages.settings();
        const dashBoard = browser.page.investorPortalPages.dashBoard();
        await dashBoard.validateValuationChart(setting.elements.accountDropDown, chartText);


    },
};