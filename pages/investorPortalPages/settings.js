// Settings functionalities

const settingsCommands = {

    /** 
    * Validate Night mode of Investor Portal
    * @author slaxmi
    */
    validateNightMode: async function () {
        // Click on moon icon
        await this.waitForElementVisible(
            "@modeImage",
            30000,
            true,
            function () { },
            "Asserting Moon Icon is Present",
        );
        await this.click("@modeImage");
        await this.assert.textContains("@nightModeImage", "Night mode on", "Asserting Night Mode On text is present");
    },

    /** 
     * Validate Day mode of Investor Portal
     * @author slaxmi
    */

    validateDayMode: async function () {
        // Click on sun icon
        await this.waitForElementVisible(
            "@nightModeImage",
            30000,
            true,
            function () { },
            "Asserting Sun Icon is Present",
        );
        await this.click("@nightModeImage");
        await this.waitForElementVisible(
            "@modeImage",
            30000,
            true,
            function () { },
            "Asserting moon icon is present",
        );
        this.getText("@modeImage", function (result) {
                console.log("getText result", result.value);
                this.assert.equal(result.value, "", "Asserting Night Mode On text is not present");
            });
    },

    /** 
     * Select currency
     * @author slaxmi
    */

    selectCurrency: async function () {
        await this.waitForElementVisible(
            "@currencySelectorDropDown",
            30000,
            true,
            function () { },
            "Asserting currency selector is present",
        );
        await this.click("@currencySelectorDropDown");
        await this.waitForElementVisible(
            "@showMoreCurrLink",
            30000,
            true,
            function () { },
            "Asserting show more currency link is present",
        );
          await this.click("@showMoreCurrLink");
          await this.waitForElementVisible(
            "@currencyLink",
            30000,
            true,
            function () { },
            "Asserting currency link is present",
        );
            await this.click("@currencyLink");
    },

    /** 
     * Verify Refresh and Sync status and verify sync message
     * @author slaxmi 
     * @param msg String
    */

    verifyRefreshAndSyncStatus: async function (msg) {
        // click on account drop down
        await this.waitForElementVisible(
            "@accountDropDown",
            30000,
            true,
            function () { },
            "Asserting account drop down is present",
        );
        await this.click("@accountDropDown");
        // Click on Refresh/Status button and Validate Sync msg
        await this.waitForElementVisible(
            "@refreshLink",
            30000,
            true,
            function () { },
            "Asserting Refresh/Sync is present",
        );
        await this.click("@refreshLink").validateSyncMsg(msg);
        // Click on Sync button
        await this.waitForElementVisible(
            "@syncButton",
            30000,
            true,
            function () { },
            "Asserting Sync button is present",
        );
        await this.click("@syncButton");
    },

    /** 
    * Verify sync message
    * @author slaxmi
    * @param msg String
   */

    validateSyncMsg: async function (msg) {
         this.getText("@syncMsgLabel", function (result) {
            console.log("getText result", result.value);
            this.assert.equal(result.value, msg, "Asserting Sync message");
        });
    },

     /** 
     * Verify List of accounts visible after click on account drop down
     * @author slaxmi 
    */

     validateListOfAccounts: async function () {
        // click on account drop down
        await this.waitForElementVisible(
            "@accountDropDown",
            30000,
            true,
            function () { },
            "Asserting account drop down is present",
        );
        await this.click("@accountDropDown");
        let labelList = [];
        //Verify Account list for client is greater than zero
        labelList = await this.findElements('@accountsList');
        this.assert.ok(
            labelList.length > 0,
            "Asserting account list for client Is More Than Zero: " + labelList.length);
    
    },
};

module.exports = {
    commands: [settingsCommands],
    elements:
    {
        modeImage:
        {
            selector: "i.icon.icon-moon-o",

        },
        nightModeImage:
        {
            selector: "span[ng-if='PageState.nightMode']",

        },

        currencySelectorDropDown:
        {
            selector: "div.finger.button-link",
        },
        showMoreCurrLink:
        {
            selector: "span[ng-hide='showMoreCurrencies || !PageState.features.currencySelector']",
        },

        currencyLink:
        {
            selector: "//div[text()[normalize-space()='INR']]",
            locateStrategy: "xpath",
        },

        accountDropDown:
        {
            selector: "div#dropdown-menu>span",
        },

        refreshLink:
        {
            selector: "li#menu-status>a",
        },

        syncMsgLabel:
        {
            selector: "//div[@class='ui warning message']/div",
            locateStrategy: "xpath",

        },

        syncButton:
        {
            selector: "#resync-button",

        },

        accountsList:
        {
            selector: "li.no-hover.ng-scope",

        }

    },
};
