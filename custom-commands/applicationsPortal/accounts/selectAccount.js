module.exports = class selectAccount {
    async command(accountType) {
        const data=browser.globals.testDataConfig;
        const account = browser.page.applicationsPortalPages.applicationAccounts();
        switch (accountType) {
            case "ISA":
                // select ISA
                await account.selectAccountType(data.accountType.isa);
                break;
            case "SIPP":
                // select SIPP
                await account.selectAccountType(data.accountType.sipp);
                break;
            case "International SIPP":
                 // select International SIPP
                await account.selectAccountType(data.accountType.intSIPP);
                break;
            case "GIA":
                // select International GIA
                await account.selectAccountType(data.accountType.gia);
                break;
            case "Third Party SIPP":
                // select Third Party SIPP
                await account.selectAccountType(data.accountType.thirdPartySIPP);
                break;
            case "Offshore Bond":
                // Select Offshore Bond
                await account.selectAccountType(data.accountType.offshoreBond);
                break;
            case "RTSRATS":
                // Select RTSRATS
                await account.selectAccountType(data.accountType.rtsrats);
                break;
            case "Offshore Bond Personalised":
                // Select Offshore Bond Personalised
                await account.selectAccountType(data.accountType.offshoreBondPersonalised);
                break;
            case "QROPS":
                // Select QROPS
                await account.selectAccountType(data.accountType.qrops);
                break;
            case "Personal Pension":
                 // Select Personal Pension
                await account.selectAccountType(data.accountType.personalPension);
                break;
            case "Group SIPP":
                // Select Group SIPP
                await account.selectAccountType(data.accountType.groupSIPP);
                break;
            case "Onshore Bond":
                // Select Onshore Bond
                await account.selectOnshoreBondAccountType();
                break;
            default:
                console.log("Wrong Accounttype");
                break;
        }


    }

}