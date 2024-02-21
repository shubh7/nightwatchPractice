@regression
Feature: Applicant and Application Mandatory Fields Validation
    As An Advisor validate applicant and application mandatory fields


    Background: Login to GlobalApps and Select Applications
        Given User Login to "Applications" as LoginOption


    @5729377
    Scenario: Individual Applicant Mandatory Fields Validation
        When User creates new "Individual" Applicant without mandatory fields
        And User creates "ISA" account using new Applicant without "Applicant fields"
        Then Validate Applicant Mandatory fields for "Individual" applicant


    @6419119
    Scenario: Verify error message when advisor create account without bank details
        When User creates new "Individual" Applicant
        And User creates "ISA" account using new Applicant without "bank details"
        Then Validate message for missing "Bank accounts require either an Account Number and Sort Code or an Account Number/IBAN and BIC." details


    @6418984
    Scenario: Verify error message when advisor create account without model
        When User creates new "Individual" Applicant
        And User creates "ISA" account using new Applicant without "model"
        Then Validate message for missing "Selected models must total 100%" details


    @5729378
    Scenario: Verify error message when advisor create account without investment
        When User creates new "Individual" Applicant
        And User creates "ISA" account using new Applicant without "investment"
        Then Validate message for missing "Must include an investment" details