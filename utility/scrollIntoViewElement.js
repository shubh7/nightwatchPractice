//this method scrolls to the element
module.exports = class scrollIntoViewElement{
  async command(webElement){
  await browser.element(webElement.__selector, async (result) => {
    await browser.execute("arguments[0].scrollIntoView({behavior: \"instant\", block: \"center\", inline: \"center\"})", [result.value]);
  });
  }

}
