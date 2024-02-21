// Validate currency selection
module.exports= class verifyValuationAsPerCurrencySelected {
    async command(currency) {
        const setting = browser.page.investorPortalPages.settings();
        const db = browser.page.investorPortalPages.dashBoard();

        // Select Currency
        await setting.selectCurrency();

        // Verify currency of market valuation on Dashboard
        await db.validateCurrencyOfValuation(currency);
    }
};
