module.exports=class verifyHoldingListAsPerAccount{
    async command(){
        const accounts = browser.page.investorPortalPages.accounts();
        await accounts.validateHoldingList();
        console.log("Asserting holding list length is more than zero")
        await browser.assertListLengthIsMoreThanZero(accounts.elements.holdingsList);

    }
}