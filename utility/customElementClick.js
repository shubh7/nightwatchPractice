module.exports = class customElementClick {
    async command(webElement) {
      webElement.locateStrategy === "xpath" ? browser.useXpath() : browser.useCss();
      await browser.getLocationInView(webElement.__selector)
      .assert.visible(webElement.__selector).click(webElement.__selector, (result) => console.log(`Clicked on the WebElement: ${webElement.__selector}`, result.status === 0 ? "successfully" : "with no success || Error Message -> " + result.value.message));
      
    }
  
  };