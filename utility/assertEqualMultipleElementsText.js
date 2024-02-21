// Asserting multiple element text with source
module.exports = class assertEqualMultipleElementsText {
    async command(locateStrategy, webElement, expectedValue) {
        await browser.waitForElementVisible(
            webElement,
            10000,
            true,
            function () { },
            `Waiting for the WebElement: ${webElement.__selector} to display`,
        );

        const labelList = [];
        await browser.elements(locateStrategy, webElement, async cells => {
            for (let cell = 0; cell < cells.value.length; cell++) {
                await browser.elementIdText(cells.value[cell]["element-6066-11e4-a52e-4f735466cecf"], actualValue => {
                    labelList.push(actualValue.value);
                });
            }
        });

        console.log("Element Text :", labelList);
        if (expectedValue.length === labelList.length) {
            for (let i = 0; i < expectedValue.length; i++) {
                await browser.assert.equal(
                    labelList[i].replace(/"/g, ""),
                    expectedValue[i],
                    `Asserting the WebElement: ${webElement.name} || Expected Value: ${expectedValue[i]} || Actual Value: ${labelList[i]}`
                );
            }
        } else {
            throw new Error(`The Length of an Expected Value: ${expectedValue.length} || Actual Value: ${labelList.length} -> is not matched`);
        }
    }
};
