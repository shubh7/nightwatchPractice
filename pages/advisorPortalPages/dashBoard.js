// Advisor Portal functionalities

const advisorPortalDashboardCommands = {

    /** 
    * Navigate tabs of Advisor Portal
    * @author slaxmi
    */
    navigateTabs: async function (tabName) {
        const webElement = `#sidebar-item-'${tabName}`;
        await this.waitForElementVisible(
            webElement,
            30000,
            true,
            function () { },
            `Tab ${tabName} is visible`,
        );
    },

   
};

module.exports = {
    commands: [advisorPortalDashboardCommands],
    elements:
    {
        modeImage:
        {
            selector: "i.icon.icon-moon-o",

        },
       
    }
};
