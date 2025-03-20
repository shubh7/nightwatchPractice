const importCwd = require('import-cwd')
const { Given, Then } = importCwd('@cucumber/cucumber')


Given('User Login to Saucedemo app', async function () {
  const appConfig = browser.globals.appConfig
  const loginPage = browser.page.loginPage();
  console.log("Launching URL is: " + appConfig.appUrl);
  await browser.maximizeWindow()
            .url(appConfig.appUrl);
  await loginPage.fillLoginForm(appConfig.username, appConfig.password);
  await loginPage.clickLogInButton();
});

Then('User should see App logo', async function () {
  const inventoryPage = browser.page.inventoryPage();
  await inventoryPage.verifyAppLogo('Swag Labs')
  
});

