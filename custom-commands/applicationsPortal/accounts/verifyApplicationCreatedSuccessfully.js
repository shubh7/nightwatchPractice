module.exports = class verifyApplicationCreatedSuccessfully {
    async command() {
        const data = browser.globals.testDataConfig;
        const review = browser.page.applicationsPortalPages.applicationReview(); 
            await review.verifyApplicationReviewPage(data.applicationCreatedSuccessMsg);        
            await review.submitApplication();
    }
}