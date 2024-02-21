module.exports = class verifySubmittedApplication {
  async command(expectedValue) {
     const submitApp = browser.page.applicationsPortalPages.submittedApplication(); 
     await browser.assertEqualMultipleElementsText('xpath', submitApp.elements.digitalAcceptanceLabel,expectedValue);

 }
}