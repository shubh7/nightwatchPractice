module.exports = class assertListLengthIsMoreThanZero {
    async command(webElement) {
        let labelList = [];
        //Verify length of list is more than Zero
        labelList = await browser.findElements(webElement);
        await browser.assert.ok(
            labelList.length > 0,
            "Asserting length of list is more than zero : " + labelList.length);
    }
};