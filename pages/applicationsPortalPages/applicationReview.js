// Application / Review page commands and locators
const applicantionReviewCommands = {

    /** 
  *Verify Application Review page
  *@param expectedMsg String
 * @author slaxmi
 */
    verifyApplicationReviewPage: async function (expectedMsg) {
        //Verify Generate Investment Illustration button is present
        await this.waitForElementVisible(
            "@generateInvestmentIllustrationButton",
            50000,
            true,
            function () { },
            "Asserting Generate Investment Illustration Button is present",
        );
        this.scrollIntoViewElement(this.elements.successMessageHeading);
        // Verify Application completion message
        await this.waitForElementVisible(
            "@appSuccessMsgLable",
            60000,
            true,
            function () { },
            "Asserting Success mesaage Lable is present",
        );
        await this.assert.textContains("@appSuccessMsgLable", expectedMsg, "Asserting completion success message");
        //Verify Get Partial Application button is present
        await this.waitForElementVisible(
            "@getPartialAppFormButton",
            50000,
            true,
            function () { },
            "Asserting Get Partial AppForm Button is present",
        );

    },

    /** 
 *Submit Application
* @author slaxmi
*/
    submitApplication: async function () {
        await this.waitForElementVisible(
            "@finaliseButton",
            50000,
            true,
            function () { },
            "Asserting Finalise button is present",
        );
        await this.click("@finaliseButton");
        await this.waitForElementVisible(
            "@digitalAcceptanceTab",
            50000,
            true,
            function () { },
            "Asserting Digital Acceptance Tab is present",
        );
        await this.pause(2000);
        await this.scrollIntoViewElement(this.elements.sendDigitalInviteLabel);
    }

};

module.exports = {
    commands: [applicantionReviewCommands],
    elements:
    {
        finaliseButton: {
            selector: "button[ng-show='appCtrl.show.submit()']"
        },
        successMessageHeading: {
            selector: "div.ui.success.message"
        },

        appSuccessMsgLable: {
            selector: "//div[contains(@class,'ui success')]//h3[1]",
            locateStrategy: "xpath"
        },
        generateInvestmentIllustrationButton: {
            selector: "generate-illustrations[ng-if='reviewCtrl.showIllustrations'] span:nth-child(2)"

        },

        getPartialAppFormButton: {
            selector: "div[class='ui segment'] span:nth-child(2)"

        },
        generateSIPPIllustrationButton: {
            selector: "div[ng-click='illCtrl.downloadPraIllustration(account, $index)'] span:nth-child(2)"

        },
        digitalAcceptanceTab: {
            selector: "div[ng-if='submitter.canDigitallySign']"
        },

        sendDigitalInviteLabel: {
            selector: "i.icon.icon-document-pdf"
        },
        mandatoryFieldsErrList: {
            selector: "(//span[@ng-repeat='error in val.errors track by $index'])",
            locateStrategy: "xpath"
        },

        errorLabel: {
            selector: "span[ng-repeat='error in val.errors track by $index'],div[ng-repeat='error in val.errors']"
            
        },

    }

}