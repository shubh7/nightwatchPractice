module.exports = class assertEqualElementText {
   async command(webElement, expectedValue) { 
      //locateStrategy === "xpath" ? this.useXpath() : this.useCss();
      await browser.waitForElementVisible(
        webElement,
        25000,
        true,
        function () { },
        "Asserting Error message is present");
        await browser.getText(webElement, function (actualValue) {
          browser.assert.contains(
              actualValue.value,
              expectedValue,
              `Asserting the WebElement text || Expected Value: ${expectedValue} || Actual Value: ${actualValue.value} -> are equal`
          );
      });
  }
};