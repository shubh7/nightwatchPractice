// Validate Activity section
module.exports = class validateActivitySection{
     async command(dashBoardHeading) {
        const dashBoard = browser.page.investorPortalPages.dashBoard();
        //Verify Activity Section is present or not
        console.log("Asserting Activity Section Count Is More Than Zero")
        await browser.assertListLengthIsMoreThanZero(dashBoard.elements.activityTable);       
    }
}