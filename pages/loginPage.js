// Login functionalities

const loginCommands = {

    /** 
    * Fill login form
    * @author slaxmi
    * @param username
    * @param password
   */

    fillLoginForm: async function (username, password) {
        await this.waitForElementVisible(
            "@userNameTextBox",
            30000,
            true,
            function () { },
            "Asserting the user name TextBox is Present",
        );
        await this.sendKeys(this.elements.userNameTextBox, username);
        await this.waitForElementVisible(
            "@passwordTextBox",
            30000,
            true,
            function () { },
            "Asserting the Password TextBox is Present",
        );
        await this.sendKeys(this.elements.passwordTextBox, password);
    },


    /** 
    * Click on login button
    * @author slaxmi
    */
    async clickLogInButton() {
        await this.waitForElementVisible(
            "@submitButton",
            200000,
            true,
            function () { },
            "Asserting the Submit Button is Present",
        );

        await this.click('@submitButton');
    },

    /** 
    * Select login option as Investor Portal
    * @author slaxmi
    */

    selectInvestorPortal: async function () {
        await this.waitForElementVisible("@investorPortalButton", 2000).click("@investorPortalButton");
    },

    /** 
    * Select login option as Applications
    * @author slaxmi
    */

    selectApplications: async function () {
        await this.waitForElementVisible(
            "@applicationsButton",
            30000,
            true,
            function () { },
            "Asserting Applications button is present",
        );
        await this.click("@applicationsButton");
    },


    /** 
* Select login option as TrasnsferTracker
* @author skothari
*/

    selectTransferTracker: async function () {
        await this.waitForElementVisible(
            "@transferTrackerButton",
            30000,
            true,
            function () { },
            "Asserting Transfer Tracker button is present",
        );
        await this.click("@transferTrackerButton");
    },

    
    /** 
    * Select login option as Applications
    * @author slaxmi
    */

    selectAdvisorPortal: async function () {
        await this.waitForElementVisible(
            "@advisorPortalButton",
            30000,
            true,
            function () { },
            "Asserting Advisor Portal button is present",
        );
        await this.click("@advisorPortalButton");
    },


};

module.exports = {
    commands: [loginCommands],
    elements:
    {
        userNameTextBox:
        {
            selector: "#Username",
            // locateStrategy: 'xpath'

        },

        passwordTextBox:
        {
            selector: "#Password",

        },
        submitButton:
        {
            selector: "button[type='submit']",

        },
        investorPortalButton:
        {
            selector: "button[value='1038']",

        },

        applicationsButton:
        {
            selector: "button[value='1046']",

        },

        transferTrackerButton:
        {
            selector: "button[value='TRNTRACK']",
        },
        advisorPortalButton:
        {
            selector: "button[value='ADVISER2']",

        },

    },
};
