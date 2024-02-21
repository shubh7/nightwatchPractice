module.exports = class verifyAccountCodeCreated {
    async command() {
       const submitApp = browser.page.applicationsPortalPages.submittedApplication(); 
       await submitApp.verifyAccountCodeCreated();
  
   }
  }