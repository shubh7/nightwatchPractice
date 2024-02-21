const database = require("../../../utility/sqlServer/dbOperation.js");
const sumittedApplicationCommands = {
    /** 
     * Get Account code
    * @author slaxmi
    * @param delay int
    */

    getAccountCode: async function (delay) {
        let accountCode = null;
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    await this.waitForElementVisible(
                        "@acctCodeLink",
                        30000,
                        true,
                        function () { },
                        "Asserting Valuation is present",
                    );
                    await this.getText("@acctCodeLink", function (result) {
                        accountCode = result.value;
                    });
                    resolve(accountCode);
                }
                catch(error) {
                    reject(error);
                }
            }, delay);
        });
    },

     /** 
     * Validate account code
    * @author slaxmi
    */

     verifyAccountCodeCreated: async function () {
         // Get Account Code
        let appCode = await this.getAccountCode(2000);
        console.log('Account Code : ',appCode);
       await this.assert.notEqual(appCode, null, "Asserting Account code is not null");
    },

     /** 
     * Validate account code in database
    * @author slaxmi
    */

     isAccountPresentInDb: async function () {
        // Get Account Code
        let appCode = await this.getAccountCode(2000);
        console.log('Account Code : ',appCode);
        query = `select accnt_id from [PPSTEST].[dbo].tblAccounts where accnt_code ='${appCode}'`;
        console.log(query);
        const isPresent = (await database.runQuery(query) !== null) ? true : false;
        console.log('Account Code is present:', isPresent);     

    }


};

module.exports = {
    commands: [sumittedApplicationCommands],
    elements:
    {
        paperApplicationTab: {
            selector: "div[ng-if='submitter.canUploadDocuments']"
        },

        digitalAcceptanceLabel: {
            selector: "(//h2[@class='block-mini'])",
            locateStrategy: "xpath"
        },
        sendInviteButton: {
            selector: "button[ng-if='!sig.status.hasSentInvites']"
        },
        acctCodeLink: {
            selector: "//h2[@ng-show='::saCtrl.hasAppForm(account)']//a[1]",
            locateStrategy: "xpath"
        },

        digitalInvitationLabel: {
            selector: "div[class='xs-8'] h2[class='block-mini']"
        },
       

    }

}