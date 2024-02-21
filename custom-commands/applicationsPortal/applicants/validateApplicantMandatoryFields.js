module.exports = class validateApplicantMandatoryFields {
    async command(expectedValue) {
        const review = browser.page.applicationsPortalPages.applicationReview();
       await browser.assertEqualMultipleElementsText('xpath', review.elements.mandatoryFieldsErrList,expectedValue);

   }
}