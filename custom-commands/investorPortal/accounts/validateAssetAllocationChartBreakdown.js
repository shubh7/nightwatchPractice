module.exports=class validateAssetAllocationChartBreakdown{
    async command(){
        const accounts = browser.page.investorPortalPages.accounts();
        //Verify Asset allocation chart
        accounts.assertAssetAllocationChartIsVisible();
        console.log("Asserting Asset Allocation Chart is showing data")
        await browser.assertListLengthIsMoreThanZero(accounts.elements.assetAllocationDataChartList);

    }
}