//Application accounts Functionalities
const { faker } = require('@faker-js/faker');
const date = new Date();
const applicationAccountsCommands = {

    /** 
  *Select Advisor
 * @author slaxmi
 * @param accountType String
 */
    selectAccountType: async function (accountType) {
        this.execute(function () {
            var element = document.querySelector('button[ng-show=\'appCtrl.show.next()\']');
            element.scrollIntoView();
        });
        await this.pause(2000);
        await this.click('@continueButton');
        console.log('Clicked on Continue button');
        const webElement = `div[id='${accountType}'] div i[class='icon icon-down-open transformable']`;
        console.log(webElement);
        await this.waitForElementVisible(
            webElement,
            80000,
            true,
            function () { },
            "Asserting AccountType is present",
        );
        await this.click(webElement);
        const accountTypeServiceItemList = `div[ng-repeat='pds in account.pdsGroup track by $index'] div[id='${accountType}'] div`
        await this.waitForElementVisible(
            accountTypeServiceItemList,
            80000,
            true,
            function () { },
            "Asserting AccountType Service is present",
        );
        await this.click(accountTypeServiceItemList);
        if (accountType == 'Onshore Bond') {
            await this.waitForElementVisible(
                onShoreBondAccountLink,
                80000,
                true,
                function () { },
                "Asserting AccountType Service is present",
            );
            await this.click(onShoreBondAccountLink);

        }
    },

    /** 
 *Select Onshore Bond Account Type
* @author slaxmi
*/
    selectOnshoreBondAccountType: async function () {
        this.execute(function () {
            var element = document.querySelector('button[ng-show=\'appCtrl.show.next()\']');
            element.scrollIntoView();
        });
        await this.pause(2000);
        await this.click('@continueButton');
        console.log('Clicked on Continue button');
        await this.waitForElementVisible(
            "@onShoreBondAccountLink",
            80000,
            true,
            function () { },
            "Asserting AccountType is present",
        );
        await this.click("@onShoreBondAccountLink");


    },

    /** 
     *Enter Account Details
    * @author slaxmi
    * @param sourceOfFunds String
    * @param accountType String
    */
    enterAccountDetails: async function (sourceOfFunds, accountType) {
        // Enter source of funds
        await this.customElementClick(this.elements.sourceOfFundsTextBox);
        await this.sendKeys("@sourceOfFundsTextBox", sourceOfFunds);

        const eligibleAccountTypes = new Set(['ISA', 'GIA', 'Third Party SIPP', 'RTSRATS', 'QROPS', 'Personal Pension', 'Group SIPP']);

        if (eligibleAccountTypes.has(accountType)) {
            // Enter ongoing fee amount
            await this.customElementClick(this.elements.ongoingFeeAmtTextBox);
            await this.sendKeys("@ongoingFeeAmtTextBox", 2);
        }

    },


    /** 
    *Enter Initial cash investment
   * @author slaxmi
   * @param accountType String
   */
    enterInitialCashInvestment: async function (accountType) {
        // Enter Initial cash investment
        await this.customElementClick(this.elements.cashAmtTextBox);
        await this.sendKeys("@cashAmtTextBox", faker.number.int(1000));
        const eligibleAccountTypes = new Set(['ISA', 'GIA', 'Third Party SIPP', 'RTSRATS', 'QROPS', 'Personal Pension','Group SIPP']);
        if (eligibleAccountTypes.has(accountType)) {
            // Enter Initial Investment Fee
            await this.customElementClick(this.elements.initialInvFeeAmtTextBox);
            await this.sendKeys("@initialInvFeeAmtTextBox", 3);
        }

    },

    /** 
    *Enter Regular contribution
   * @author slaxmi
   */
    enterRegularContribution: async function () {
        // Enter Regular contribution amount
        await this.customElementClick(this.elements.regularContriAmtTextBox);
        await this.sendKeys("@regularContriAmtTextBox", faker.number.int(1000));
        // Enter Regular contribution fee
        await this.customElementClick(this.elements.regularContriFeeAmtTextBox);
        await this.sendKeys("@regularContriFeeAmtTextBox", 2);

    },

    /** 
   *Add Model
  * @author slaxmi
  */
    addModel: async function () {
        // Click Add Model Button
        await this.customElementClick(this.elements.addModelButton);
        // Click on Model Manager dropdown
        await this.customElementClick(this.elements.modelManagerDropDown);
        // Select Model Manager 
        await this.customElementClick(this.elements.modelManagerItemList);
        // Click on Model Name dropdown
        await this.customElementClick(this.elements.modelNameDropDown);
        // Select Model Name 
        await this.customElementClick(this.elements.modelManagerItemList);
        //Enter model proportion as 100%
        await this.waitForElementVisible(
            "@modelProportionTextBox",
            80000,
            true,
            function () { },
            "Asserting Model Proportion Text box is present",
        );
        await this.setValue("@modelProportionTextBox", "100");

    },
    /** 
   *Enter Bank Details
  * @author slaxmi
  * @param accountNo String
  * * @param sortCode int
  */
    enterBankDetails: async function (accountNo, sortCode) {
        // Enter Account number
        await this.waitForElementVisible(
            "@accountNumberTextBox",
            40000,
            true,
            function () { },
            "Asserting account number text box is present",
        );
        await this.sendKeys("@accountNumberTextBox", accountNo);
        // Enter Regular contribution fee
        await this.waitForElementVisible(
            "@sortCodeTextBox",
            80000,
            true,
            function () { },
            "Asserting Sortcode Text box is present",
        );
        await this.sendKeys("@sortCodeTextBox", sortCode);

    },
    /** 
    *Enter Contribution for SIPP account
   * @author slaxmi
   */
    enterContributionForSIPP: async function () {
        // Click on Add Contributor button
        await this.customElementClick(this.elements.addContributorButton);
        // Click on Contributor type dropdown
        await this.customElementClick(this.elements.selectTypeDropDown);
        // Select Contributor type
        await this.customElementClick(this.elements.selectTypeList);
        // Click on Payment type dropdown
        await this.customElementClick(this.elements.selectPaymentTypeDropDown);
        // Select Payment type
        await this.customElementClick(this.elements.selectPaymentTypeList);
        //Enter Contribution Amount
        await this.customElementClick(this.elements.contriAmtTextBox);
        await this.sendKeys("@contriAmtTextBox", faker.number.int(1000));
        //Enter Payment Date
        const currentDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + (date.getFullYear() + 1);
        await this.customElementClick(this.elements.paymentDateTextBox);
        await this.sendKeys("@paymentDateTextBox", currentDate);
        //Add Model
        await this.addModel();
        // Enter Regular contribution fee
        await this.customElementClick(this.elements.regularContriFeeTextBox);
        await this.sendKeys("@regularContriFeeTextBox", 2);


    },

    /** 
   *Select Product for Offshore Bond
  * @author slaxmi
  */
    selectProduct: async function () {
        // Click on Product Provider Drop down
        await this.customElementClick(this.elements.productProviderDropDown);
        // Select provider from List
        await this.customElementClick(this.elements.productProviderLists);
        //  Click on Product Drop down
        await this.customElementClick(this.elements.productDropDown);
        // Select product from List
        await this.customElementClick(this.elements.productLists);
        // Click Provider Reference Textbox 
        await this.customElementClick(this.elements.providerReferenceTextBox);
        //Enter Product provider reference
        await this.sendKeys(this.elements.providerReferenceTextBox, faker.number.int(1000));

    },


};


module.exports = {
    commands: [applicationAccountsCommands],
    elements: {
        onShoreBondAccountLink: {
            selector: "div[id='accountTypeUK10425'] i[class='icon icon-chart-line']"
        },
        continueButton: {
            selector: "button[ng-show='appCtrl.show.next()']"
        },
        sourceOfFundsTextBox: {
            selector: "input[name='sourceOfFunds']"
        },
        ongoingFeeAmtTextBox: {
            selector: "(//input[@name='feeValue'])[1]", locateStrategy: "xpath"
        },
        initialInvFeeAmtTextBox: {
            selector: "(//input[@name='feeValue'])[2]", locateStrategy: "xpath"
        },
        cashAmtTextBox: {
            selector: "input[name='cash']"
        },
        regularContriAmtTextBox: {
            selector: "input[ng-model='contributionCtrl.contribution.amount']"
        },
        regularContriFeeAmtTextBox: {
            selector: "(//input[@name='feeValue'])[3]", locateStrategy: "xpath"
        },
        addModelButton: {
            selector: "section-button[ng-if='modelCtrl.individualAssets'] ng-transclude"
        },
        modelManagerDropDown: {
            selector: "a[placeholder='Select a model manager'] span[class='select2-arrow ui-select-toggle']"
        },
        modelManagerItemList: {
            selector: "(//div[@class='select2-result-label ui-select-choices-row-inner'])[1]",
            locateStrategy: "xpath"
        },
        modelNameDropDown: {
            selector: "a[placeholder='Select a model'] span[class='select2-arrow ui-select-toggle']"
        },
        modelNameItemList: {
            selector: "li[id='ui-select-choices-row-10-0'] div[class='select2-result-label ui-select-choices-row-inner']"
        },
        modelProportionTextBox: {
            selector: "input[ng-model='model.proportion']"
        },
        accountNumberTextBox: {
            selector: "input[ng-model='intlBankAccountCtrl.bankAccount.accountNumber']"
        },
        sortCodeTextBox: {
            selector: "input[ng-model='intlBankAccountCtrl.bankAccount.accountBsb']"
        },

        addContributorButton: {
            selector: "section-button[ng-click='contCtrl.addContributor();'] ng-transclude"
        },
        selectTypeDropDown: {
            selector: "(//a[@placeholder='Select type']//span)[3]",
            locateStrategy: "xpath"
        },
        selectTypeList: {
            selector: "(//li[@ng-if='$select.open']//div)[1]",
            locateStrategy: "xpath"
        },
        selectPaymentTypeDropDown: {
            selector: "(//span[@class='select2-arrow ui-select-toggle'])[3]",
            locateStrategy: "xpath"
        },
        selectPaymentTypeList: {
            selector: "(//li[@ng-if='$select.open']//div)[1]",
            locateStrategy: "xpath"
        },
        contriAmtTextBox: {
            selector: "input[ng-model='contribution.amount']"
        },
        paymentDateTextBox: {
            selector: "input[name='paymentDate']"
        },
        regularContriFeeTextBox: {
            selector: "(//input[@name='feeValue'])[2]",
            locateStrategy: "xpath"
        },
        morningstarWealthAccountsHeader: {
            selector: "div[id^='accountType']"
        },
        productProviderDropDown: {
            selector: "(//a[@placeholder='Please Choose a Product Provider...']//span)[3]",
            locateStrategy: "xpath"
        },
        productProviderLists: {
            selector: "li.ui-select-choices-row.select2-highlighted"
        },
        productDropDown: {
            selector: "(//a[@placeholder='Please Choose a Product...']//span)[3]",
            locateStrategy: "xpath"
        },
        productLists: {
            selector: "li[role='option']"
        },
        providerReferenceTextBox: {
            selector: "input[name='providerReference']"
        }
    }
};
