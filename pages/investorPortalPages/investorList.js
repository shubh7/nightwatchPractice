// Investor List functionalities

const investorListCommands = {


    /** 
     * Search and Select Investor
    * @author slaxmi 
    * @param investor String
    */

    selectSearchedInvestor: async function (investor) {
        // Click on Impersonateany user
        await this.waitForElementVisible("@impersonateAnyTab", 5000, false, function () { }, " Asserting Impersonate Any user Button is present");
        await this.click("@impersonateAnyTab");
        // Search Investor
        await this.waitForElementVisible("@searchInvestorTextArea", 5000, false, function () { }, "Asserting Search Investor Text Area is present");
        await this.sendKeys("@searchInvestorTextArea", investor);
        // Select Investor
        await this.waitForElementVisible("@selectInvestorLink", 5000, false, function () { }, "Asserting select Investor link is present");
        await this.click("@selectInvestorLink");
        
    },

};


module.exports = {
    commands: [investorListCommands],
    elements: {

        impersonateAnyTab:
        {
            selector: "#tab-impersonateanyone",
        },
        searchInvestorTextArea:
        {
            selector: "#investor-search",
        },

        selectInvestorLink:
        {
            selector: "a.ng-binding",
        },

    },

};
