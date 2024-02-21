//Create UK Individual Applicant

module.exports = class createTrustApplicant {
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
        await browser.customElementClick(manageApplicant.elements.trustApplicantButton);
        //Enter Trust Applicant Details
        await manageApplicant.enterTrustApplicantDetails();
        //Click on Enter Manually Button
        await browser.customElementClick(manageApplicant.elements.enterManuallyButton);
        //Enter Residential Address
        await manageApplicant.enterResidentialAddress();
        // Add Trustee Personal Details
        await manageApplicant.addTrusteesPersonalDetails();
        // Add Trustee Address
        await manageApplicant.addTrusteesAddress();
        // Save Applicant
        await browser.customElementClick(manageApplicant.elements.saveButton);

    }


}