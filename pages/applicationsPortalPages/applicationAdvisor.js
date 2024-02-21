// Applicants Functionalities
const applicantsCommands = {

    /** 
   *Select Advisor
  * @author slaxmi
  */
    selectAdvisor: async function (advisor) {
        this.scrollIntoViewElement(this.elements.advisorContinueButton);
        const isContinueButtonEnabled = await this.isEnabled('@advisorContinueButton')
        console.log("Attribute Value ", isContinueButtonEnabled);

        if (isContinueButtonEnabled === 'false') {
            await this.waitForElementVisible(
                "@advisorSearchTextBox",
                30000,
                true,
                function () { },
                "Asserting Advisor search Textbox is present",
            );

            await this.click("@advisorSearchTextBox").setValue("@advisorSearchTextBox", advisor);
            await this.waitForElementVisible(
                "@advisorSelectionButton",
                30000,
                true,
                function () { },
                "Asserting Advisor selection button is present",
            );
            await this.click('@advisorSelectionButton');

            await this.waitForElementVisible(
                "@advisorContinueButton",
                30000,
                true,
                function () { },
                "Asserting Continue is present",
            );
            this.scrollIntoViewElement(this.elements.advisorContinueButton);
        }

        else {
            await this.getLocationInView('@continueButton')
            .assert.visible('@continueButton').click('@continueButton');
           
        }
    },


};


module.exports = {
    commands: [applicantsCommands],
    elements:
    {
        applicantsLink:
        {
            selector: "i.icon.icon-user-add.icon-5x"
        },

        advisorContinueButton:
        {
            selector: 'button[ng-show=\'appCtrl.show.next()\']'
        },

        advisorSearchTextBox:
        {
            selector: "input[placeholder='Search...']"
        },

        advisorSelectionButton:
        {
            selector: "input-search h4"
        },

        continueButton:
        {
            selector: "(//button[contains(@class,'ui green')])[1]",
            locateStrategy: "xpath"
        },

        createNewApplicantButton:
        {
            selector: "div.ui.large"

        },
    }

}