// Login to Global Apps and select login option as investor Portal
module.exports = class globalAppsLogin {
    async command(user, loginOption) {
        console.log("Environment Running: " + browser.globals.environment);
        console.log("Launching URL is: " + browser.globals.envDataConfig.globalAppUrl);
        const loginPage = browser.page.loginPage();
        // Login to GlobalApps
        browser.maximizeWindow()
            .url(browser.globals.envDataConfig.globalAppUrl);

        // Select Login options
        switch (loginOption) {
            case "Investor Portal":
                await loginPage.fillLoginForm(user.l13.username, user.l13.password);
                await loginPage.clickLogInButton();
                // select Investor Portal
                await loginPage.selectInvestorPortal();
                break;
            case "Applications":
                await loginPage.fillLoginForm(user.applications.username, user.applications.password);
                await loginPage.clickLogInButton();
                // select Applications Portal
                await loginPage.selectApplications();
                break;
            case "Advisor Portal":
                await loginPage.fillLoginForm(user.advisor.username, user.advisor.password);
                await loginPage.clickLogInButton();
                // select Advisor Portal
                await loginPage.selectAdvisorPortal();
                break;
            default:
                console.log("Wrong login option selected. Please select correct login option.");
                break;
        }


    }
};


