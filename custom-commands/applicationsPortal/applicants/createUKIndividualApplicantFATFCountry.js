//validate the FATF country error and warning messages
const { faker } = require('@faker-js/faker');

module.exports = class createUKIndividualApplicantFATFCountry {
    async command() {
        const data = browser.globals.testDataConfig;
        const applicant = browser.page.applicationsPortalPages.applicationAdvisor();
        const manageApplicant = browser.page.applicationsPortalPages.manageApplicant();
        //Click on Start New
        await browser.customElementClick(applicant.elements.applicantsLink);
        // Select Advisor
        await applicant.selectAdvisor(data.advisor);
        await browser.customElementClick(applicant.elements.continueButton);
        await browser.customElementClick(applicant.elements.continueButton);
        //Click on Create New Applicant
        await browser.customElementClick(applicant.elements.createNewApplicantButton);
        //Click on Individual Applicant
        await browser.customElementClick(manageApplicant.elements.individualApplicantButton);
        //Click on Title dropdown
        await browser.customElementClick(manageApplicant.elements.titleDropDown);
        //Select Title
        await browser.customElementClick(manageApplicant.elements.titleList);
        //Enter First Name
        await manageApplicant.enterFirstName();
        //Enter Last Name
        await manageApplicant.enterLastName();
        //Click on Gender dropdwon
        await browser.customElementClick(manageApplicant.elements.genderDropDown);
        //Select Gender
        await browser.customElementClick(manageApplicant.elements.genderList);
        // enter personal details
        await browser.customElementClick(manageApplicant.elements.emailTextArea);
        const email = faker.internet.email();
        await browser.sendKeys(manageApplicant.elements.emailTextArea, email);
        await browser.perform(function () {
            const actions = this.actions({ async: true });
            return actions
                .keyDown(browser.Keys.TAB)
                .pause(500)
        });
        await browser.customElementClick(manageApplicant.elements.confirmEmailTextArea);
        await browser.sendKeys(manageApplicant.elements.confirmEmailTextArea, email);
        //Select Country 
        await manageApplicant.customSelectallCountryFields();

    }


}