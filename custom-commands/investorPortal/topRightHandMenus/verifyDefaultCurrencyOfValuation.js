// Validate Default currency of valuation
module.exports = class verifyDefaultCurrencyOfValuation {
    async command(currency) {
        const db = browser.page.investorPortalPages.dashBoard();

        // Validate default currency of Valuation
        await db.validateDefaultCurrencyOfValuation(currency);
    }
};
