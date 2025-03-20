// Login functionalities

const inventoryCommands = {

    /** 
    * Verif App Logo on Inventory Page
    * @author slaxmi
   */

    verifyAppLogo: async function (logoName) {
        await this.waitForElementVisible(
            "@inventoryAppLogo",
            30000,
            true,
            function () { },
            "Asserting the App logo is present on Inventory page",
        );
        await this.assert.textContains("@inventoryAppLogo", logoName, "Asserting Logo Name");
    }    

};

module.exports = {
    commands: [inventoryCommands],
    elements:
    {
        inventoryAppLogo:
        {
            selector: ".app_logo"

        }
    },
};
