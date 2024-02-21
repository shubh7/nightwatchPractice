module.exports = class selectTab {

    async command(tab) {
        const dashBoard = browser.page.investorPortalPages.dashBoard();
        const accounts = browser.page.investorPortalPages.accounts();

        switch (tab) {
            case "Dashboard":
                await dashBoard.validateActiveTab(tab);
                break;
            case "Accounts":
                await accounts.selectAccountsTab();
                await dashBoard.validateActiveTab(tab);
                break;
            case "Holdings":
                console.log("Adviser Portal")
                break;
            case "Performance":
                console.log("Adviser Portal")
                break;
            case "Transactions":
                console.log("Adviser Portal")
                break;
            case "Ins & outs":
                console.log("Adviser Portal")
                break;
            case "Documents":
                console.log("Adviser Portal")
                break;
            default:
                console.log("Wrong env");
                break;
        }

    }

}