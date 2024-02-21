// Accounts functionalities
const assert = require('assert');
const accountsCommands = {

    /** 
    *Select Accounts Tab
   * @author slaxmi
   */
    selectAccountsTab: async function () {
        await this.waitForElementVisible(
            "@acountsTab",
            30000,
            true,
            function () { },
            "Asserting Accounts Tab is present",
        );
        // click on account
        await this.click('@acountsTab');
    },


    /** 
     * Validate Asset Allocation Breakdown 
    * @author slaxmi
    */

    assertAssetAllocationChartIsVisible: async function () {
        await this.waitForElementVisible(
            "@assetAllocationLabel",
            30000,
            true,
            function () { },
            "Asserting Asset Allocation Breakdown is present",
        );
    },

    /** 
     * Get investment valuation from accounts page
    * @author slaxmi
    */

    getInvestmentValuation: async function (delay) {
        let investmentValuation = null;
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    await this.waitForElementVisible(
                        "@investmentonAccountsLabel",
                        30000,
                        true,
                        function () { },
                        "Asserting Valuation is present",
                    );
                    this.getText("@investmentonAccountsLabel", function (result) {
                        investmentValuation = result.value;
                    });
                    resolve(investmentValuation);
                }
                catch(error) {
                    reject(error);
                }
            }, delay);
        });
    },

    /** 
     * Validate holdings list is showing up for account
    * @author slaxmi
    */

    validateHoldingList: async function () {

        // Get valuation from Account page
        let valuation = await this.getInvestmentValuation(2000);
        console.log('Valuation : ',valuation);

        // click on one of the investments on Account Page
        await this.click('@investmentonAccountsLink');
        await this.waitForElementVisible(
            "@investmentonAccountsLabel",
            30000,
            true,
            function () { },
            "Asserting Valuation is present for holdings",
        );
        await this.assert.textContains("@investmentonAccountsLabel", valuation, "Asserting investment valuation is showing after selecting one of the accounts");

    },
};


module.exports = {
    commands: [accountsCommands],
    elements:
    {
        acountsTab:
        {
            selector: "#sidebar-accounts"

        },

        assetAllocationLabel:
        {
            selector: "h2.block-small.text-center"
        },

        assetAllocationDataChartList:
        {
            selector: "//span[contains(@class,'ellipsis left')]",
            locateStrategy: "xpath"
        },

        investmentonAccountsLink:
        {
            selector: "(//div[@class='link'])[1]",
            locateStrategy: "xpath"
        },

        investmentonAccountsLabel:
        {
            selector: "(//div[@class='link']//div)[1]|(//div[contains(@class,'alpha item')])[2]",
            locateStrategy: "xpath"
        },

        holdingsList:
        {
            selector: "//table[@id='holdings-table']/tbody[1]/tr/td[1]/span[1]",
            locateStrategy: "xpath"
        },

    }

};