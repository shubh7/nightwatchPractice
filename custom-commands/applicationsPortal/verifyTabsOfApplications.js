module.exports = class verifyTabsOfApplications {
    async command(tab) {
        const menu = browser.page.applicationsPortalPages.menuNavigation();
        await menu.navigateToApplicationTab(tab);

    }
}