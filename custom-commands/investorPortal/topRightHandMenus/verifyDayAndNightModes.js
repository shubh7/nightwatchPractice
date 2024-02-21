// Validate Day and Night modes of investor portal
module.exports = class verifyDayAndNightModes {
    async command() {
        const setting = browser.page.investorPortalPages.settings();
        // Validate Night mode
        await setting.validateNightMode();
        // Validate Day mode
        await setting.validateDayMode();
    }
};
