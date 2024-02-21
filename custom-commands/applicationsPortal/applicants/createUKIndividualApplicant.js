//Create UK Individual Applicant

module.exports = class createUKIndividualApplicant {
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
        //Select Country
        await manageApplicant.selectCountry(manageApplicant.elements.countryDropDown, manageApplicant.elements.searchCountryTextBox,
            manageApplicant.elements.searchedCountryValue,data.address.country);
        //Click on Enter Manually Button
        await browser.customElementClick(manageApplicant.elements.enterManuallyButton);
        //Enter Residential Address
        await manageApplicant.enterResidentialAddress();
        //Enter Personal Details
        await manageApplicant.enterPersonalDetails();
        //Enter SIPP details
        await manageApplicant.enterSIPPApplicantDetails();
        // Save Applicant
        await browser.customElementClick(manageApplicant.elements.saveButton);

    }


}