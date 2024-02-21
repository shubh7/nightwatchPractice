module.exports = class verifyAllTabs {
    async command(tab) {
        const tabs = browser.page.advisorPortalPages.dashBoard();
        await tabs.navigateTabs(tab);

    }
}