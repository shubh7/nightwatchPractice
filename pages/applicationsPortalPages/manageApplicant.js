const { faker } = require('@faker-js/faker');
const data = browser.globals.testDataConfig;
const manageApplicantCommands = {

    /** 
    *Enter First name
   * @author slaxmi
   */
    enterFirstName: async function () {
        // Enter First Name
        let firstName = faker.person.firstName();
        console.log('First Name : ', firstName);
        await this.customElementClick(this.elements.firstNameTextBox);
        await this.sendKeys("@firstNameTextBox", "UKIndividual" + firstName);
    },
    /** 
        *Enter Last name
       * @author slaxmi
       */
    enterLastName: async function () {
        // Enter Last Name
        let lastName = faker.person.lastName();
        console.log('Last Name : ', lastName);
        await this.customElementClick(this.elements.lastNameTextBox);
        await this.sendKeys("@lastNameTextBox", lastName);
    },

    /** 
    *Select Country
   * @author slaxmi
   * @param country String
   * @param countryDropDown WebElement
   * @param searchCountryTextBox WebElement
   * @param searchedCountryValue WebElement
   */
    selectCountry: async function (countryDropDown, searchCountryTextBox, searchedCountryValue, country) {
        //Click on country dropdown
        await this.customElementClick(countryDropDown);
        //Click on Search country text box
        await this.customElementClick(searchCountryTextBox);
        //Enter country name
        await this.sendKeys(searchCountryTextBox, country);
        //Click on Searched value
        await this.customElementClick(searchedCountryValue);
    },

    /** 
    *Select Country of tax residence
   * @author slaxmi
   * @param country String
   */
    selectCountryOfTaxResidence: async function (country) {
        //Click on country of tax dropdown
        await this.customElementClick(this.elements.countryOfTaxDropDown);
        //Click on Search country of tax text box
        await this.customElementClick(this.elements.searchCountryOfTaxTextBox);
        //Enter country name
        await this.sendKeys("@searchCountryOfTaxTextBox", country);
        //Click on Searched value
        await this.customElementClick(this.elements.searchedCountryValue);
    },

    /** 
   *Create Map for address details
  * @author slaxmi
  */
    createAddressMap: function () {
        const address = new Map();
        address.set("street", data.address.street);
        address.set("addressLine2", data.address.addressLine2);
        address.set("postCode", data.address.postCode);
        address.set("subUrb", data.address.subUrb);
        // Return the map
        return address;

    },


    /** Enter Residential Address
    * @author slaxmi
    */
    enterResidentialAddress: async function () {
        const addressMap = this.createAddressMap();
        // Enter Street Name
        await this.customElementClick(this.elements.streetAddressTextArea);
        await this.sendKeys("@streetAddressTextArea", addressMap.get("street"));
        // Enter Address 2
        await this.customElementClick(this.elements.addressLine2TextArea);
        await this.sendKeys("@addressLine2TextArea", addressMap.get("addressLine2"));
        // Enter Post code
        await this.customElementClick(this.elements.postCodeTextArea);
        await this.sendKeys("@postCodeTextArea", addressMap.get("postCode"));
        // Enter Surburb name
        await this.customElementClick(this.elements.subUrbTextArea);
        await this.sendKeys("@subUrbTextArea", addressMap.get("subUrb"));
    },

    /** 
  *Create Map for personal details
 * @author slaxmi
 */
    createPersonalDetailsMap: function () {
        const personalDetailsMap = new Map();
        personalDetailsMap.set("country", data.address.country);
        personalDetailsMap.set("dob", data.personalDetails.dob);
        personalDetailsMap.set("phoneNo", data.personalDetails.phoneNo);
        personalDetailsMap.set("taxFromDate", data.personalDetails.taxFromDate);
        personalDetailsMap.set("isin", data.personalDetails.isin);
        // Return the map
        return personalDetailsMap;

    },


    /** Enter Personal details
    * @author slaxmi
    */
    enterPersonalDetails: async function () {
        const personalDetails = this.createPersonalDetailsMap();
        // Enter Dob
        await this.customElementClick(this.elements.dobTextArea);
        await this.sendKeys("@dobTextArea", personalDetails.get("dob"));
        // Enter Phone number
        await this.customElementClick(this.elements.phoneNumberTextArea);
        await this.sendKeys("@phoneNumberTextArea", personalDetails.get("phoneNo"));
        // Enter Email Address
        await this.customElementClick(this.elements.emailTextArea);
        const email = faker.internet.email();
        await this.sendKeys("@emailTextArea", email);
        await browser.perform(function () {
            const actions = this.actions({ async: true });
            return actions
                .keyDown(browser.Keys.TAB)
                .pause(500)
        });
        await this.customElementClick(this.elements.confirmEmailTextArea);
        await this.sendKeys("@confirmEmailTextArea", email);
        // Enter National Isurance Number
        await this.customElementClick(this.elements.nationalInsNumTextArea);
        await this.sendKeys("@nationalInsNumTextArea", personalDetails.get("isin"));
        //Select Country
        await this.selectCountryOfTaxResidence(personalDetails.get("country"));
        // Enter Tax From Date
        await this.customElementClick(this.elements.fromDateTextArea);
        await this.sendKeys("@fromDateTextArea", personalDetails.get("taxFromDate"));

    },

    /** Enter SIPP Applicant Details
    * @author slaxmi
    */
    enterSIPPApplicantDetails: async function () {
        this.scrollIntoViewElement(this.elements.sippButton);
        await this.waitForElementVisible(
            "@sippApplicantCheckBox",
            30000,
            true,
            function () { },
            "Asserting SIPP check box is present",
        );
        // Check checkbox 
        await this.click(this.elements.sippApplicantCheckBox);
        // Enter Retirement age
        await this.customElementClick(this.elements.retirementAgeTextBox);
        await this.sendKeys("@retirementAgeTextBox", 60);
        // Click Marital Status dropdown
        await this.customElementClick(this.elements.maritalStatusDropDown);
        await this.customElementClick(this.elements.maritalStatusList);
        // Enter Annual Earnings
        await this.sendKeys("@annualEarningTextBox", faker.number.int(10000));
        // Select Status   
        await this.customElementClick(this.elements.statusDropDown);
        await this.customElementClick(this.elements.statusList);
        // Select Source of Wealth
        await this.customElementClick(this.elements.sourceOfWealthDropDown);
        await this.customElementClick(this.elements.sourceOfWealthList);
    },
    /** 
   *Create Map for trust applicant details
  * @author slaxmi
  */
    createTrustApplicantMap: function () {
        const trustApplicantDetails = new Map();
        trustApplicantDetails.set("lei", data.trustApplicantDetails.lei);
        trustApplicantDetails.set("dateOfEstablishment", data.trustApplicantDetails.dateOfEstablishment);
        trustApplicantDetails.set("country", data.trustApplicantDetails.country);
        trustApplicantDetails.set("countryOfNationality", data.trustApplicantDetails.countryOfNationality);
        trustApplicantDetails.set("countryOfBirth", data.trustApplicantDetails.countryOfBirth);
        trustApplicantDetails.set("taxID", data.trustApplicantDetails.taxID);
        trustApplicantDetails.set("street", data.trustApplicantDetails.street);
        trustApplicantDetails.set("addressLine2", data.trustApplicantDetails.addressLine2);
        trustApplicantDetails.set("postCode", data.trustApplicantDetails.postCode);
        trustApplicantDetails.set("subUrb", data.trustApplicantDetails.subUrb);
        // Return the map
        return trustApplicantDetails;
    },

    /** 
   *Enter Trust Applicant Details
  * @author slaxmi
  */
    enterTrustApplicantDetails: async function () {
        const trustApplicant = this.createTrustApplicantMap();
        const personalDetails = this.createPersonalDetailsMap();
        // Enter Trust Name
        let trustName = faker.company.name();
        console.log('Trust Name : ', trustName);
        await this.customElementClick(this.elements.trustNameTextBox);
        await this.sendKeys("@trustNameTextBox", "Auto Trust " + trustName);
        //Select Nature of Trust
        await this.customElementClick(this.elements.natureOfTrustDropDown);
        await this.customElementClick(this.elements.natureOfTrustList);
        // Enter LEI
        await this.customElementClick(this.elements.leiTextBox);
        await this.sendKeys("@leiTextBox", trustApplicant.get("lei"));
        // Enter Date of Establishment
        await this.customElementClick(this.elements.dateOfEstablishmentTextBox);
        await this.sendKeys("@dateOfEstablishmentTextBox", trustApplicant.get("dateOfEstablishment"));
        //Click on country of tax domicile
        await this.customElementClick(this.elements.taxDomicileDropDown);
        //Click on Search country of tax domicile
        await this.customElementClick(this.elements.searchTaxDomicileTextBox);
        //Enter country name
        await this.sendKeys("@searchTaxDomicileTextBox", personalDetails.get("country"));
        //Click on Searched value
        await this.customElementClick(this.elements.searchedTaxDomicileCountryValue);
        //Select country
        await this.selectCountry(this.elements.countryDropDown, this.elements.searchCountryTextBox,
            this.elements.searchedCountryValue, personalDetails.get("country"));

    },

    /** 
    *Add personal details of the Trustees
   * @author slaxmi
   */
    addTrusteesPersonalDetails: async function () {
        //const trustApplicant = this.createTrustApplicantMap();
        const personalDetails = this.createPersonalDetailsMap();
        //Click on Trustees and Beneficiaries button
        await this.customElementClick(this.elements.addTrusteeButton);
        //Click on Title dropdown
        await browser.customElementClick(this.elements.titleDropDown);
        //Select Title
        await browser.customElementClick(this.elements.trustTitleList);
        // Enter Trustees First Name
        let trusteesFirstName = faker.company.name();
        console.log('Trustees First Name : ', trusteesFirstName);
        await this.customElementClick(this.elements.givenNameTextBox);
        await this.sendKeys("@givenNameTextBox", trusteesFirstName);
        // Enter Trustees Last Name
        let trusteesLastName = faker.company.name();
        console.log('Trustees Last Name : ', trusteesLastName);
        await this.customElementClick(this.elements.givenLastNameTextBox);
        await this.sendKeys("@givenLastNameTextBox", trusteesLastName);
        // Enter Date of Birth
        await this.customElementClick(this.elements.trusteeDOBTextBox);
        await this.sendKeys("@trusteeDOBTextBox", personalDetails.get("dob"));
        //Select Capacity
        await this.customElementClick(this.elements.capacityDropDown);
        await this.customElementClick(this.elements.capacityList);
        // Enter Trustee Contact Phone
        await this.customElementClick(this.elements.trusteeContactPhoneTextBox);
        await this.sendKeys("@trusteeContactPhoneTextBox", personalDetails.get("phoneNo"));

    },

    /** 
       *Add Trustee Address
      * @author slaxmi
      */
    addTrusteesAddress: async function () {
        const trustApplicant = this.createTrustApplicantMap();
        const personalDetails = this.createPersonalDetailsMap();
        //Select country
        await this.selectCountry(this.elements.trusteeCountryDropDown, this.elements.trusteeSearchCountryTextBox,
            this.elements.searchedCountryValue, trustApplicant.get("country"));
        // Enter Street Name
        await this.customElementClick(this.elements.trusteesStreetAddressTextArea);
        await this.sendKeys("@trusteesStreetAddressTextArea", trustApplicant.get("street"));
        // Enter Address 2
        await this.customElementClick(this.elements.trusteesAddressLine2TextArea);
        await this.sendKeys("@trusteesAddressLine2TextArea", trustApplicant.get("addressLine2"));
        // Enter Post code
        await this.customElementClick(this.elements.trusteesPostCodeTextArea);
        await this.sendKeys("@trusteesPostCodeTextArea", trustApplicant.get("postCode"));
        // Enter Surburb name
        await this.customElementClick(this.elements.trusteesSubUrbTextArea);
        await this.sendKeys("@trusteesSubUrbTextArea", trustApplicant.get("subUrb"));
        //Select country of Nationality
        await this.selectCountry(this.elements.trusteeCountryOfNationalityDropDown, this.elements.trusteeSearchCountryNationalityTextBox,
            this.elements.searchedCountryValue, trustApplicant.get("countryOfNationality"));
        // Enter National Isurance Number
        await this.customElementClick(this.elements.nationalInsNumTextArea);
        await this.sendKeys("@nationalInsNumTextArea", personalDetails.get("isin"));
        //Select country of Birth
        await this.selectCountry(this.elements.trusteeCountryOfBirthDropDown, this.elements.trusteeSearchCountryOfBirthTextBox,
            this.elements.searchedCountryValue, trustApplicant.get("countryOfBirth"));
        // Enter TaxID
        await this.customElementClick(this.elements.trusteesTaxIdTextArea);
        await this.sendKeys("@trusteesTaxIdTextArea", trustApplicant.get("taxID"));
        // Enter Email Address
        await this.customElementClick(this.elements.emailTextArea);
        const email = faker.internet.email();
        await this.sendKeys("@emailTextArea", email);
        await browser.perform(function () {
            const actions = this.actions({ async: true });
            return actions
                .keyDown(browser.Keys.TAB)
                .pause(500)
        });
        await this.customElementClick(this.elements.confirmEmailTextArea);
        await this.sendKeys("@confirmEmailTextArea", email);
        // Uncheck Create new user when an application is submitted and link the account(s) to it
        await this.click(this.elements.createLoginCheckBox);
    },

      /**
   * Function to select all the coutnry field for verify FATF country code
   * @author skothari
   */
  customSelectallCountryFields: async function () {
    const country = browser.globals.testDataConfig.fatfCountry;
    await this.selectCountry(country);
    await this.selectCountryOfTaxResidence(country);
    await this.customSelectDropDownValue(
      "Country of nationality",
      country,
      4000
    );
    await this.customSelectDropDownValue("Country of birth", country, 3000);
  },


  /**
   * common function to select type from dropdown
   * @author skothari
   * @param dropdownLabel : string like "Contributor"
   * @param dropdwnType : string like "Personal"
   */
  customSelectDropDownValue: async function (
    dropdownLabel,
    dropdwnType,
    dropdownLabelWaitTime
  ) {
    const dropdownparentelement =
      "//label[.='" +
      dropdownLabel +
      "']//following-sibling::*//span[contains(@class,'toggle')]";
    const dropdownchildelement =
      "//label[.='" +
      dropdownLabel +
      "']//following-sibling::*//li[@role='option' and contains(.,'" +
      dropdwnType +
      "')]//div";
    console.log("wait for drop down parent to be visible");
    await this.useXpath().waitForElementVisible(
      dropdownparentelement,
      dropdownLabelWaitTime,
      false,
      function () {},
      "wait for dropdownparent option to be visible" + dropdownparentelement
    );
    console.log("click on drop down parent");
    await this.useXpath().click(dropdownparentelement);
    console.log("wait for drop down child to be visible");
    await this.useXpath()
      .waitForElementVisible(dropdownchildelement, 4000)
      .click(dropdownchildelement);
    console.log("click on drop down child");
  },
};

module.exports = {
    commands: [manageApplicantCommands],
    elements: {

        individualApplicantButton:
        {
            selector: "div.ui.button.active"
        },

        sippButton:
        {
            selector: "button[class='ui icon button']"
        },

        titleDropDown:
        {
            selector: "div[name='name_title'] span[class='select2-arrow ui-select-toggle']"
        },

        titleList:
        {
            selector: "li[id='ui-select-choices-row-0-0'] div[class='select2-result-label ui-select-choices-row-inner']"
        },

        firstNameTextBox:
        {
            selector: "input[name='firstName']"
        },

        lastNameTextBox:
        {
            selector: "input[name='lastName']"
        },
        genderDropDown:
        {
            selector: "div[name='gender'] span[class='select2-arrow ui-select-toggle']"
        },
        genderList:
        {
            selector: "li[id='ui-select-choices-row-1-0'] div[class='select2-result-label ui-select-choices-row-inner']"
        },
        countryDropDown:
        {
            selector: "jk-country[ng-model='addressCtrl.item.countryCode'] span[class='select2-arrow ui-select-toggle']"
        },

        searchCountryTextBox:
        {
            selector: "div[class='ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active'] input[aria-label='Select box']"
        },

        searchedCountryValue:
        {
            selector: "(//div[@class='select2-result-label ui-select-choices-row-inner']//div)[2]",
            locateStrategy: "xpath"
        },
        enterManuallyButton:
        {
            selector: "button[ng-click='addressCtrl.enterManually()']"
        },

        streetAddressTextArea:
        {
            selector: "input[placeholder='Street address']"
        },

        addressLine2TextArea:
        {
            selector: "input[ng-model='addressCtrl.item.line2']"
        },
        postCodeTextArea:
        {
            selector: "input[ng-model='addressCtrl.item.postcode']"
        },
        subUrbTextArea:
        {
            selector: "input[ng-model='addressCtrl.item.city']"
        },
        dobTextArea:
        {
            selector: "input[name='birthDate']"
        },
        phoneNumberTextArea:
        {
            selector: "input[ng-model='iCtrl.indiv.phone']"
        },

        emailTextArea:
        {
            selector: "input[type='email']"
        },
        confirmEmailTextArea:
        {
            selector: "input[name='individualEmail_Confirm']"
        },
        nationalInsNumTextArea:
        {
            selector: "input[name='document-code']"
        },
        professionTextArea:
        {
            selector: "input[ng-model='iCtrl.indiv.profession']"
        },
        sourceOfWealthTextArea:
        {
            selector: "input[ng-model='iCtrl.indiv.sourceOfWealth']"
        },
        fromDateTextArea:
        {
            selector: "input[ng-model='taxResidence.from']"
        },
        countryOfTaxDropDown:
        {
            selector: "jk-country[class='ng-pristine ng-untouched ng-valid ng-empty'] span[class='select2-arrow ui-select-toggle']"
        },
        searchCountryOfTaxTextBox:
        {
            selector: "div[class='ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active'] input[aria-label='Select box']"
        },

        fromDateTextBox:
        {
            selector: "input[name='from']"
        },
        IsinNumberTextBox:
        {
            selector: "input[ng-model='taxResidence.identification']"
        },

        saveButton:
        {
            selector: "button[type='submit']"
        },
        sippApplicantCheckBox:
        {
            selector: "label[for='showPraDetails']"

        },
        retirementAgeTextBox:
        {
            selector: "input[ng-model='praCtrl.details.retirementAge']"
        },
        maritalStatusDropDown:
        {
            selector: "div[class='field eight wide'] span[class='select2-arrow ui-select-toggle']"
        },
        maritalStatusList:
        {
            selector: "(//li[@ng-if='$select.open']//div)[2]",
            locateStrategy: "xpath"
        },
        annualEarningTextBox:
        {
            selector: "input[ng-model='praCtrl.details.annualEarnings']"
        },
        statusDropDown:
        {
            selector: "div[class='field five wide'] a[placeholder='Please select'] span[class='select2-arrow ui-select-toggle']"
        },
        statusList:
        {
            selector: "//li[@class='ui-select-choices-row select2-highlighted']//div[1]",
            locateStrategy: "xpath"
        },

        sourceOfWealthDropDown: {
            selector: "div[class='field four wide'] span[class='select2-arrow ui-select-toggle']"

        },
        sourceOfWealthList: {
            selector: "(//li[@ng-if='$select.open']//div)[3]",
            locateStrategy: "xpath"

        },
        identificationDocDropDown: {
            selector: "(//a[@placeholder='Select document']//span)[3]",
            locateStrategy: "xpath"

        },
        identificationList: {
            selector: "(//li[@ng-if='$select.open']//div)[1]",
            locateStrategy: "xpath"


        },
        addressVerificationDropDown: {
            selector: "div[class='ui-select-container select2 select2-container ng-pristine ng-untouched ng-valid ng-empty'] a[placeholder='Select document'] span[class='select2-arrow ui-select-toggle']",


        },
        addressVerificationList: {
            selector: "li[id='ui-select-choices-row-8-1'] div[class='select2-result-label ui-select-choices-row-inner']",
            locateStrategy: "xpath"

        },

        countryVerificationLabel: {
            selector: "div.ui.message.error"
        },

        countryVerificationNationalityLabel: {
            selector: "div.ui.message.warning"
        },

        individualApplicantButton: { selector: "div.ui.button.active" },
        sippButton: { selector: "button[class='ui icon button']" },
        titleDropDown: { selector: "div[name='name_title'] span[class='select2-arrow ui-select-toggle']" },
        titleList: { selector: "li[id='ui-select-choices-row-0-0'] div[class='select2-result-label ui-select-choices-row-inner']" },
        firstNameTextBox: { selector: "input[name='firstName']" },
        lastNameTextBox: { selector: "input[name='lastName']" },
        genderDropDown: { selector: "div[name='gender'] span[class='select2-arrow ui-select-toggle']" },
        genderList: { selector: "li[id='ui-select-choices-row-1-0'] div[class='select2-result-label ui-select-choices-row-inner']" },
        countryDropDown: { selector: "jk-country[ng-model='addressCtrl.item.countryCode'] span[class='select2-arrow ui-select-toggle']" },
        searchCountryTextBox: { selector: "div[class='ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active'] input[aria-label='Select box']" },
        searchedCountryValue: { selector: "(//div[@class='select2-result-label ui-select-choices-row-inner']//div)[2]|(//div[@class='select2-result-label ui-select-choices-row-inner']//div)[1]", locateStrategy: "xpath" },
        enterManuallyButton: { selector: "button[ng-click='addressCtrl.enterManually()']" },
        streetAddressTextArea: { selector: "input[placeholder='Street address']" },
        addressLine2TextArea: { selector: "input[ng-model='addressCtrl.item.line2']" },
        postCodeTextArea: { selector: "input[ng-model='addressCtrl.item.postcode']" },
        subUrbTextArea: { selector: "input[ng-model='addressCtrl.item.city']" },
        dobTextArea: { selector: "input[name='birthDate']" },
        phoneNumberTextArea: { selector: "input[ng-model='iCtrl.indiv.phone']" },
        emailTextArea: { selector: "input[type='email']" },
        confirmEmailTextArea: { selector: "input[name='individualEmail_Confirm'],input[name='signatoryEmail0_Confirm']" },
        nationalInsNumTextArea: { selector: "input[name='document-code']" },
        professionTextArea: { selector: "input[ng-model='iCtrl.indiv.profession']" },
        sourceOfWealthTextArea: { selector: "input[ng-model='iCtrl.indiv.sourceOfWealth']" },
        fromDateTextArea: { selector: "input[ng-model='taxResidence.from']" },
        countryOfTaxDropDown: { selector: "jk-country[class='ng-pristine ng-untouched ng-valid ng-empty'] span[class='select2-arrow ui-select-toggle']" },
        searchCountryOfTaxTextBox: { selector: "div[class='ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active'] input[aria-label='Select box']" },
        fromDateTextBox: { selector: "input[name='from']" },
        IsinNumberTextBox: { selector: "input[ng-model='taxResidence.identification']" },
        saveButton: { selector: "button[type='submit']" },
        sippApplicantCheckBox: { selector: "label[for='showPraDetails']" },
        retirementAgeTextBox: { selector: "input[ng-model='praCtrl.details.retirementAge']" },
        maritalStatusDropDown: { selector: "div[class='field eight wide'] span[class='select2-arrow ui-select-toggle']" },
        maritalStatusList: { selector: "(//li[@ng-if='$select.open']//div)[2]", locateStrategy: "xpath" },
        annualEarningTextBox: { selector: "input[ng-model='praCtrl.details.annualEarnings']" },
        statusDropDown: { selector: "div[class='field five wide'] a[placeholder='Please select'] span[class='select2-arrow ui-select-toggle']" },
        statusList: { selector: "//li[@class='ui-select-choices-row select2-highlighted']//div[1]", locateStrategy: "xpath" },
        sourceOfWealthDropDown: { selector: "div[class='field four wide'] span[class='select2-arrow ui-select-toggle']" },
        sourceOfWealthList: { selector: "(//li[@ng-if='$select.open']//div)[3]", locateStrategy: "xpath" },
        identificationDocDropDown: { selector: "(//a[@placeholder='Select document']//span)[3]", locateStrategy: "xpath" },
        identificationList: { selector: "(//li[@ng-if='$select.open']//div)[1]", locateStrategy: "xpath" },
        addressVerificationDropDown: { selector: "div[class='ui-select-container select2 select2-container ng-pristine ng-untouched ng-valid ng-empty'] a[placeholder='Select document'] span[class='select2-arrow ui-select-toggle']", },
        addressVerificationList: { selector: "li[id='ui-select-choices-row-8-1'] div[class='select2-result-label ui-select-choices-row-inner']", locateStrategy: "xpath" },
        trustApplicantButton: { selector: "div[ng-if='applEditCtrl.allowTrusts']" },
        trustNameTextBox: { selector: "input[ng-model='trustCtrl.applicant.name']" },
        natureOfTrustDropDown: { selector: "(//a[contains(@class,'select2-choice ui-select-match')]//span)[3]", locateStrategy: "xpath" },
        natureOfTrustList: { selector: "(//li[@class='ui-select-choices-row']//div)[2]", locateStrategy: "xpath" },
        leiTextBox: { selector: "input[ng-model='leiCtrl.code']" },
        dateOfEstablishmentTextBox: { selector: "input[name='dateOfEstablishment']" },
        taxDomicileDropDown: { selector: "(//a[@placeholder='Select a country']//span)[3]", locateStrategy: "xpath" },
        taxDomicileList: { selector: "(//li[@class='ui-select-choices-row']//div)[2]", locateStrategy: "xpath" },
        searchTaxDomicileTextBox: { selector: "(//label[text()='Tax domicile']/following::input)[1]", locateStrategy: "xpath" },
        searchedTaxDomicileCountryValue: { selector: "(//div[@class='select2-result-label ui-select-choices-row-inner']//div)[2]", locateStrategy: "xpath" },
        addTrusteeButton: { selector: "button[ng-click='signatoriesCtrl.addSignatory();']" },
        trustTitleList: { selector: "(//li[@ng-if='$select.open']//div)[1]", locateStrategy: "xpath" },
        givenNameTextBox: { selector: "input[ng-model='signatory.firstName']" },
        givenLastNameTextBox: { selector: "input[ng-model='signatory.lastName']" },
        trusteeDOBTextBox: { selector: "input[ng-model='signatory.dateOfBirth']" },
        capacityDropDown: { selector: "(//a[@placeholder='Select a capacity...']//span)[3]", locateStrategy: "xpath" },
        capacityList: { selector: "li.ui-select-choices-row.select2-highlighted" },
        trusteeContactPhoneTextBox: { selector: "input[ng-model='signatory.contactPhone']" },
        trusteeCountryDropDown: { selector: "(//a[@placeholder='Select a country']//span[3])[3]", locateStrategy: "xpath" },
        trusteeSearchCountryTextBox: { selector: "(//div[@class='search-container select2-search']//input)[3]", locateStrategy: "xpath" },
        trusteesStreetAddressTextArea: { selector: "(//input[@placeholder='Street address'])[2]", locateStrategy: "xpath" },
        trusteesAddressLine2TextArea: { selector: "(//input[@ng-model='addressCtrl.item.line2'])[2]", locateStrategy: "xpath" },
        trusteesPostCodeTextArea: { selector: "jk-address[name='Home Address'] div[class='field two wide'] input[type='text']" },
        trusteesSubUrbTextArea: { selector: "jk-address[name='Home Address'] div[class='field three wide'] input[type='text']" },
        trusteeCountryOfNationalityDropDown: { selector: "(//a[@placeholder='Select a country']//span[3])[4]", locateStrategy: "xpath" },
        trusteeSearchCountryNationalityTextBox: { selector: "(//div[@class='search-container select2-search']//input)[4]", locateStrategy: "xpath" },
        trusteeCountryOfBirthDropDown: { selector: "(//a[@placeholder='Select a country']//span[3])[5]", locateStrategy: "xpath" },
        trusteeSearchCountryOfBirthTextBox: { selector: "(//div[@class='search-container select2-search']//input)[5]", locateStrategy: "xpath" },
        trusteesTaxIdTextArea: { selector: "input[ng-model='signatory.taxId']" },
        createLoginCheckBox: { selector: "(//input[@ng-model='login.loginInfo.createLogin']/following-sibling::label)[2]", locateStrategy: "xpath" },
    }
}