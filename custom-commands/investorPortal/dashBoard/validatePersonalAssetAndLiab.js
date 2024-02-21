/* Check after click on somethingMissing , Personal Checkbox is checked or not.
 and also validate Personal Finance info of Investor*/

module.exports= class validatePersonalAssetAndLiab {
    async command(expectedValue) {
        const dashBoard = browser.page.investorPortalPages.dashBoard();
        await dashBoard.validatePersonalCheckBox();
        // Validate Personal Finance Information
        await browser.assertEqualMultipleElementsText("xpath", dashBoard.elements.assetLiabTable, expectedValue);
    }
};
