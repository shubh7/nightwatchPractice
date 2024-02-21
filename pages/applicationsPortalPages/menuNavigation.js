

const menuNavigationCommands ={
    /** 
     * Navigate to application tabs
    * @author slaxmi
    * @param tab String
    */
   navigateToApplicationTab: async function(tab){
    const webElement = `a[ui-sref='${tab}'],a[ui-sref='templateManager']`;
        await this.waitForElementVisible(
            webElement,
            50000,
            true,
            function () { },
            `Asserting ${tab} is present`,
        );
        await this.click(webElement);

   }
};

module.exports={
    commands: [menuNavigationCommands]
};