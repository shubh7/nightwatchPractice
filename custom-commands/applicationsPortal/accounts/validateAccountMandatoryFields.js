module.exports = class validateAccountMandatoryFields {
    async command(expectedValue) {
        const review = browser.page.applicationsPortalPages.applicationReview();
       await browser.assertEqualElementText(review.elements.errorLabel,expectedValue);

   }
}