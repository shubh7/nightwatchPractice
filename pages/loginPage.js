// Login functionalities

const loginCommands = {

    /** 
    * Fill login form
    * @author slaxmi
    * @param username
    * @param password
   */

    fillLoginForm: async function (username, password) {
        await this.waitForElementVisible(
            "@userNameTextBox",
            30000,
            true,
            function () { },
            "Asserting the user name TextBox is Present",
        );
        await this.sendKeys(this.elements.userNameTextBox, username);
        await this.waitForElementVisible(
            "@passwordTextBox",
            30000,
            true,
            function () { },
            "Asserting the Password TextBox is Present",
        );
        await this.sendKeys(this.elements.passwordTextBox, password);
    },


    /** 
    * Click on login button
    * @author slaxmi
    */
    async clickLogInButton() {
        await this.waitForElementVisible(
            "@loginButton",
            200000,
            true,
            function () { },
            "Asserting the Login Button is Present",
        );

        await this.click('@loginButton');
    },

   

};

module.exports = {
    commands: [loginCommands],
    elements:
    {
        userNameTextBox:
        {
            selector: "#user-name"

        },

        passwordTextBox:
        {
            selector: "#password",

        },
        loginButton:
        {
            selector: "#login-button",

        },
        

    },
};
