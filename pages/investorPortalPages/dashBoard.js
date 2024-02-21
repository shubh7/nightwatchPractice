// DashBoard functionalities
const assert = require('assert');

const dashBoardCommands = {

    /** 
     * Validate active tab after login as Investor
    * @author slaxmi 
    * @param tab
    */

    validateActiveTab: async function (tab) {
        await this.waitForElementVisible("@activeTab", 30000);
        const result = await new Promise((resolve, reject) => {
            this.getText("xpath", "@activeTab", function (result) {
                if (result.status === 0) {
                    resolve(result.value);
                } else {
                    reject(new Error("Failed to get text from @activeTab"));
                }
            });
        });
    
        console.log("getText result", result);
        await this.assert.equal(result, tab, "Asserting Active Tab");
    },

    /** 
    * Validate currency of valuation after selecting different currecy
    * @author slaxmi
    * @param currency Numbers
    */
    validateCurrencyOfValuation: async function (currency) {
        await this.waitForElementVisible(
            "@valuationBreakdownLabel",
            30000,
            true,
            function () { },
            "Asserting Valuation Breakdown Label",
        );
        // Validate selected currecy is matching with currency of market valuation
        return await this.assert.textContains("@valuationBreakdownLabel", currency, "Asserting selected currecy is matching with currency of market valuation");
    },

    /** 
     * Validate default currency of valuation
    * @author slaxmi 
    * @param currency Numbers
    */

    validateDefaultCurrencyOfValuation: async function (currency) {
        // Validate default currecy of account
        await this.waitForElementVisible(
            "@defaultCurrLabel",
            30000,
            true,
            function () { },
            "Asserting default currency of Valuation",
        );
        await this.waitForElementVisible("@defaultCurrLabel", 5000);
        return await this.assert.textContains("@defaultCurrLabel", currency, "Asserting default currency of valuation");
    },

    /** 
     * Validate dashboard valuation
     * @author slaxmi
    */

    validateDashboardValuation: async function () {
        await this.waitForElementVisible(
            "@valuationBreakdownLabel",
            30000,
            true,
            function () { },
            "Asserting Dashboard Valuation",
        );
        this.getText("@valuationBreakdownLabel", function (result) {
            console.log("getText result", result.value);
            this.assert.notEqual(result.value, null, "Asserting Dashboard va;uation is not null");
        });
    },

    /** 
     * Validate Personal checkbox is checked or not
     * @author slaxmi
    */
    validatePersonalCheckBox: async function () {
        // Click on Something missing link
        console.log("Click on Something missing link");
        await this.waitForElementVisible(
            "@somethingMissingLink",
            30000,
            true,
            function () { },
            "Asserting Something missing link? is present",
        );
        await this.click("@somethingMissingLink");
        // Check Personal chekbox
        console.log("Check Personal chekbox");
        await this.waitForElementVisible(
            "@personalCheckBox",
            30000,
            true,
            function () { },
            "Asserting personal checkbox is present",
        );
        const result = await this.isVisible("@personalCheckBox");
        await this.assert.equal(result, true, "Check Box is Selected");
    },

    /** 
     * Update personal assest/liabilities
     * @author slaxmi
    */

    updatePersonalAssetAndLiab: async function () {
        await this.waitForElementVisible(
            "@investmentWealthTextArea",
            30000,
            true,
            function () { },
            "Asserting investment wealth is present",
        );
        await this.click("@investmentWealthTextArea").sendKeys("@investmentWealthTextBox", "4");
    },



    /** 
     * Validate valuation chart is displaying after selecting an account
     * @author slaxmi
     * @param accountDropDown String
     * @param expectedChartLabel String
    */

    validateValuationChart: async function (accountDropDown, expectedChartLabel) {
        // click on account drop down
        await this.waitForElementVisible(
            accountDropDown,
            30000,
            true,
            function () { },
            "Asserting account dropdown",
        );
        await this.click(accountDropDown);
        //Uncheck one of the accounts
        await this.waitForElementVisible(
            "@accountsCheckBox",
            30000,
            true,
            function () { },
            "Asserting account checkbox is present",
        );
        await this.click('@accountsCheckBox');
        // Verify Valuation Chart is getting displayed
        await this.isVisible("xpath", "@valuationChartDataGrid");
        let actualChartLabel;
        this.getText("@valuationChartDataGrid", function (result) {
            console.log("Chart Text : ", result.value);
            actualChartLabel = result.value;
            this.assert.equal(expectedChartLabel, actualChartLabel, "Asserting Chart Label is showing");
        });

    },


    /** 
    * Validate Account Page
    * @author slaxmi
   */

    validateAccountPage: async function () {
        let accountNumber = null;
        await this.waitForElementVisible(
            "@wealthAccountTable",
            30000,
            true,
            function () { },
            "Asserting accounts is present on Dashboard",
        );
        //Get account number 
         this.getText("@wealthAccountTable", function (result) {
            accountNumber = result.value;
        });
        console.log(accountNumber);
        //Click on one of the accounts present on Dashboard 
        await this.click('@wealthAccountTable');
        await this.waitForElementVisible(
            "@accountNameLable",
            30000,
            true,
            function () { },
            "Asserting accounts is present on Dashboard",
        );

        this.getText("@accountNameLable", function (actualValue) {
            this.assert.equal(
                actualValue.value,
                accountNumber,
                `Asserting the WebElement text || Expected Value: ${accountNumber} || Actual Value: ${actualValue.value} -> are equal`
            );
        });

    },

    /** 
   * Validate Net Cash Movement should not be blank on Account page for that account
   * @author slaxmi
  */

    validateNetCashMovement: async function () {
        await this.waitForElementVisible(
            "@netInOutLable",
            30000,
            true,
            function () { },
            "Asserting Net cash movement ",
        );

         this.getText("@netInOutLable", function (actualValue) {
            this.assert.notEqual(
                actualValue.value,
                null, `Asserting the WebElement text || Actual Value : ${actualValue.value} -> is not equal to null`
            );
        });

    },

    /** 
   * Validate Expenses should not be blank on Account page for that account
   * @author slaxmi
  */

    validateExpenses: async function () {
        await this.waitForElementVisible(
            "@expensesLable",
            30000,
            true,
            function () { },
            "Asserting Net cash movement ",
        );

         this.getText("@expensesLable", function (actualValue) {
            this.assert.notEqual(
                actualValue.value,
                null, `Asserting the WebElement text || Actual Value : ${actualValue.value} -> is not equal to null`
            );
        });

    },

    /** 
    * Verify Investment Wrapper Summary
    * @author slaxmi
   */

    assertInvestmentWrapperSummaryIsPresent: async function () {
        await this.waitForElementVisible(
            "@investmentTable",
            30000,
            true,
            function () { },
            "Asserting investment table",
        );
    },

};


module.exports = {
    commands: [dashBoardCommands],
    elements:
    {

        activeTab:
        {
            selector: "//div[@class='item link ng-binding ng-scope active']",
            locateStrategy: "xpath",

        },

        somethingMissingLink:
        {
            selector: "tr[class='subtle ng-scope'] td",

        },

        personalCheckBox:
        {
            selector: "i.icon.brand.icon-check",

        },

        assetLiabTable:
        {
            selector: "//span[@class='finger ng-binding']",
            locateStrategy: "xpath",

        },

        dashboardValuationLabel:
        {
            selector: "span.dashboard-valuation.finger",

        },

        investValuationTextArea:
        {
            selector: "tbody tr:nth-child(1) td:nth-child(2) div:nth-child(1) span:nth-child(1)",

        },

        investValuationTextBox:
        {
            selector: "tbody tr:nth-child(1) td:nth-child(2) div:nth-child(1) span:nth-child(1)",

        },

        valuationBreakdownLabel:
        {
            selector: "span[value='breakdownTotal']",
        },

        defaultCurrLabel:
        {
            selector: "div.finger.button-link",
        },

        investmentWealthTextArea:
        {
            selector: "(//span[contains(@class,'eta link')])[1]",
            locateStrategy: "xpath",

        },

        investmentWealthTextBox:
        {
            selector: "(//input[contains(@class,'eta text-right')])[1]",
            locateStrategy: "xpath"

        },

        valuationChartDataGrid:
        {
            selector: "(//*[local-name()='svg']//*[name()='g'])[13]",
            locateStrategy: "xpath"

        },

        accountsCheckBox:
        {
            selector: "(//div[contains(@class,'ui square')])[1]",
            locateStrategy: "xpath"

        },

        activitySectionLabel:
        {
            selector: "h2.delta.ng-scope.block-small"

        },

        activityTable:
        {
            selector: "table.subtle-table.activity-table.ng-scope > tbody"

        },

        wealthAccountTable:
        {
            selector: "//table[contains(@class,'wealth-table subtle-table')]/tbody[1]/tr[2]/td[2]",
            locateStrategy: "xpath"

        },

        accountNameLable:
        {
            selector: "span.xlarge.ng-binding"

        },

        netInOutLable:
        {
            selector: "div[value='smaCtrl.performanceData.netCashMovement'] span[class='ng-binding']"

        },

        expensesLable:
        {
            selector: "div[value='smaCtrl.performanceData.expenses'] span[class='ng-binding']"

        },

        investmentTable:
        {
            selector: "div[class='block'] table[class='wealth-table subtle-table'] >tbody > tr"

        }



    },
};

